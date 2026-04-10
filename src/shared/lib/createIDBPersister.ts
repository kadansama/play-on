import { get, set, del } from 'idb-keyval';
import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';

export function createIDBPersister(
  idbKey: IDBValidKey = 'reactQuery',
  excludeQueryKeyPrefix: string[] = ['film']
): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      const filteredClient: PersistedClient = {
        ...client,
        clientState: {
          ...client.clientState,
          queries: client.clientState?.queries?.filter(query => {
            const queryKeyPrefix = query.queryKey[0];
            return !excludeQueryKeyPrefix.includes(String(queryKeyPrefix));
          }) || []
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