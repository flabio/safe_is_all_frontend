import { Navigate, Route,  Routes } from "react-router-dom"

import { LoginPage } from "../auth"

import { AppPrivateRouter } from "./AppPrivateRouter";
import { AllIsSafeRouter } from "../AllisSafe";

export const AppRouter = () => {
  //const authStatus='not-authenticated';
  let authStatus =  localStorage.getItem('token')?'authenticated':'not-authenticated';
  return (
    <>
      <Routes>
        {(authStatus === 'not-authenticated') ?
          <Route path="auth/login/*" element={<LoginPage />} />
          : (
            <>
              <Route path="/*" element={
                <AppPrivateRouter>
                  <AllIsSafeRouter />
                </AppPrivateRouter>
              }>
              </Route>
            </>
          )
        }

        {/* <Route path="/auth/*" element={<LoginPage/>} />
    <Route path="/*" element={<AppPrivateRouter>
      <Route path="/*"element={<DashboardPage/>} />
      <Route path="/rol" element={<RolPage/>} />
    </AppPrivateRouter>
      } /> */}
        {/* {
        (authStatus==='authenticated') ?
        <Route path="/auth/*" element={<LoginPage/>} />
        :(
            <>
            <Route path="/*"element={<DashboardPage/>} />
            <Route path="/rol" element={<RolPage/>} />
           
            </>
        )
    } */}
        {/* <Route path="/*"element={<DashboardPage/>} />
     <Route path="/rol" element={<RolPage/>} />
     */}
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
      </Routes>

    </>
  )
}
