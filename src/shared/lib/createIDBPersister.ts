import { get, set, del } from 'idb-keyval';
import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';

/**
 * Custom persister для IndexedDB который фильтрует определенные запросы
 * @param idbKey - ключ для IndexedDB
 * @param excludeQueryKeyPrefix - префиксы ключей запросов, которые не нужно сохранять
 */
export function createIDBPersister(
  idbKey: IDBValidKey = 'reactQuery',
  excludeQueryKeyPrefix: string[] = ['film']
): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      // Фильтруем запросы перед сохранением - исключаем фильм-запросы
      const filteredClient: PersistedClient = {
        ...client,
        queries: client.queries?.filter(query => {
          const queryKeyPrefix = query.queryKey[0];
          return !excludeQueryKeyPrefix.includes(String(queryKeyPrefix));
        }) || [],
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