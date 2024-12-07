import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "../auth";
import { AppPrivateRouter } from "./AppPrivateRouter";
import { AllIsSafeRouter } from "../AllisSafe";

export const AppRouter = () => {
  const authStatus = localStorage.getItem('token') ? 'authenticated' : 'not-authenticated';

  return (
    <Routes>
      {/* Rutas públicas */}
      {authStatus === 'not-authenticated' && (
        <>
          <Route path="home" element={<HomePage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}

      {/* Rutas privadas */}
      {authStatus === 'authenticated' && (
        <>
          <Route path="/*" element={
            <AppPrivateRouter>
              <AllIsSafeRouter />
            </AppPrivateRouter>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
