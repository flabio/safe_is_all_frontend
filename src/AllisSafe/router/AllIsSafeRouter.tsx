import { Navigate, Route, Routes } from 'react-router-dom';
import { CityPage, CoursePage, InstructorPage, LanguagePage, ModulePage, RolPage, SchoolPage, StatePage, StudentPage, UserPage } from '../pages';
import { AsideScreen, FooterScreen, NavScreen } from '../../Screens';
import { useLocation } from 'react-router-dom';
import { DashboardPage } from '../../pages';

export const AllIsSafeRouter = () => {
    let location = useLocation();
    let nameRutorClean = location.pathname.split('/');
    return (
        <>
            <NavScreen />
            <AsideScreen />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <Routes>
                        <Route path='/' element={<Navigate to='/dashboard' replace />}></Route>
                        <Route path='dashboard' element={<DashboardPage />}></Route>
                        <Route path='rol' element={<RolPage />}></Route>
                        <Route path='/module' element={<ModulePage />}></Route>
                        <Route path='/school' element={<SchoolPage />}></Route>
                        <Route path='/city' element={<CityPage />}></Route>
                        <Route path='/state' element={<StatePage />}></Route>
                        <Route path='/course' element={<CoursePage />}></Route>
                        <Route path='user' element={<UserPage />}></Route>
                        <Route path='student' element={<StudentPage />}></Route>
                        <Route path='instructor' element={<InstructorPage />}></Route>
                        <Route path='language' element={<LanguagePage />}></Route>
                    </Routes>
                </div>
            </div>
            <FooterScreen />
        </>
    )
}