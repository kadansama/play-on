import { ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { createIDBPersister } from 'shared/lib/createIDBPersister'; 
import { ONE_DAY } from 'shared/api/queryTimes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_DAY, 
      gcTime: ONE_DAY,   
      refetchOnWindowFocus: false,
      retry: 2,
      structuralSharing: false,
    },
  },
});

// Custom persister который автоматически исключает фильм-запросы
const persister = createIDBPersister('react-query-cache', ['film']);

export const QueryProvider = ({ children }: { children: ReactNode }) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ 
      persister,
      maxAge: ONE_DAY,
    }}
  >
    {children}
  </PersistQueryClientProvider>
);

