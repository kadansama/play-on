import { get, set, del } from 'idb-keyval';
import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';

// Проверяет должен ли запрос быть сохранён в IndexedDB
function shouldPersistQuery(queryKey: readonly unknown[]): boolean {
  const prefix = queryKey[0];
  
  // Сохраняем 'filters/*' коллекции (жанры, страны)
  if (prefix === 'filters') {
    return true;
  }

  // Сохраняем 'top/*' коллекции (популярные, Оскары и т.д.)
  if (prefix === 'top') {
    return true;
  }

  // Сохраняем 'collections/*' но только первая страница (page 1 или undefined)
  if (prefix === 'collections') {
    const filterObj = queryKey[1] as Record<string, any>;
    // Кэшируем только если это первая страница или страница не указана
    const page = filterObj?.page;
    return page === undefined || page === 1 || page === null;
  }

  // Всё остальное НЕ сохраняем (film, search и др)
  return false;
}

export function createIDBPersister(
  idbKey: IDBValidKey = 'reactQuery'
): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      const filteredClient: PersistedClient = {
        ...client,
        clientState: {
          ...client.clientState,
          queries: client.clientState?.queries?.filter(query => 
            shouldPersistQuery(query.queryKey)
          ) || []
        }
      };
      await set(idbKey, filteredClient);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbKey);
    },
    removeClient: async () => {
      await del(idbKey);
    },
  };
}