import { Navigate } from "react-router-dom";

// Este componente envuelve rutas protegidas
export const AppPrivateRouter = ({ children }:any) => {
  const authStatus = localStorage.getItem('token') ? 'authenticated' : 'not-authenticated';

  // Si el usuario no está autenticado, redirigir a login
  if (authStatus === 'not-authenticated') {
    return <Navigate to="/auth/login" />;
  }
 

  // Si está autenticado, renderizar las rutas protegidas
  return children;
};
