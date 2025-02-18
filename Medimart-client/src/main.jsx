import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {RouterProvider,} from "react-router-dom";
import { router } from './Routes/Router';
import AuthProviders from './Providers/AuthProviders';



import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider> 
    </AuthProviders>
    </HelmetProvider>
  </StrictMode>,
)
