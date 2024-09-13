import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AllIsSafeApp } from './AllIsSafeApp.tsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(

<StrictMode>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <AllIsSafeApp />
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
