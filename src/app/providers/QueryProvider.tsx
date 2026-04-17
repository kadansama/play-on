import { ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { createIDBPersister } from 'shared/lib/createIDBPersister'; 
import { FIVE_MIN, ONE_DAY } from 'shared/api/queryTimes';

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

// Persister только для коллекций ('filters/*', 'top/*')
// Остальное (film, films и др) только в RAM
const persister = createIDBPersister('react-query-cache');

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

