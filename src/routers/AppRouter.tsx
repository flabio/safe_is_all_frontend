import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { AppPrivateRouter } from "./AppPrivateRouter";
import { AllIsSafeRouter } from "../AllisSafe";

export const AppRouter = () => {
  const authStatus = localStorage.getItem('token') ? 'authenticated' : 'not-authenticated';

  return (
    <>
      <Routes>
        {/* Si el usuario no está autenticado, lo redirige a la página de login */}
        {authStatus === 'not-authenticated' ? (
          <Route path="auth/login/*" element={<LoginPage />} />
        ) : (
          <>
            {/* Si el usuario está autenticado, mostrar las rutas privadas */}
            <Route path="/*" element={
              <AppPrivateRouter>
                <AllIsSafeRouter />
              </AppPrivateRouter>
            } />
          </>
        )}
        
        {/* Redirigir a login si la ruta no coincide */}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
