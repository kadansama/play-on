import { ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { createIDBPersister } from 'shared/lib/createIDBPersister'; 
import { ONE_DAY, FIVE_MIN } from 'shared/api/queryTimes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: FIVE_MIN, 
      gcTime: ONE_DAY,   
      refetchOnWindowFocus: false,
      retry: 2,
      structuralSharing: false,
    },
  },
});

const persister = createIDBPersister('react-query-cache');

export const QueryProvider = ({ children }: { children: ReactNode }) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister, maxAge: ONE_DAY }}
  >
    {children}
  </PersistQueryClientProvider>
);
