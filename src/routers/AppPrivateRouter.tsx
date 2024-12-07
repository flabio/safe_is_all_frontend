import { Navigate } from "react-router-dom";

interface AppPrivateRouterProps {
  children: React.ReactNode;
}

// Este componente envuelve rutas protegidas
export const AppPrivateRouter = ({ children }: AppPrivateRouterProps) => {
  const authStatus = localStorage.getItem('token') ? 'authenticated' : 'not-authenticated';

  // Si el usuario no está autenticado, redirigir a login
  if (authStatus === 'not-authenticated') {
    return <Navigate to="/auth/login" replace />;
  }

  // Si está autenticado, renderizar las rutas protegidas
  return <>{children}</>;
};
