import React, { createContext, useState } from 'react';

import { AppRouter } from './routers';
import { AuthProvider } from './auth';
import { AppTheme } from './AppTheme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserContext } from './hook';


const queryClient = new QueryClient();

export const AllIsSafeApp = () => {
  const [dataContext, setDataContext] = useState('');
  return (
    <UserContext.Provider value={{dataContext, setDataContext }}>  
    <QueryClientProvider client={queryClient}>
    
        <AppTheme>

          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </AppTheme>
    </QueryClientProvider>
</UserContext.Provider>
  )
}