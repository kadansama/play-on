import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { routes } from 'app/routing/routes';
import { QueryProvider } from 'app/providers';

import 'app/styles/index.css'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools/>
    </QueryProvider>
  </StrictMode>
)