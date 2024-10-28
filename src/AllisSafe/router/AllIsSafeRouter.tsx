import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { CityPage, CoursePage, InstructorPage, LanguagePage, RolPage, SchoolPage, StatePage,  StudentPage,  UserPage } from '../pages';
import { AsideScreen, FooterScreen, NavScreen } from '../../Screens';
import { useLocation } from 'react-router-dom';





export const AllIsSafeRouter = () => {
    let location = useLocation();
    
    let nameRutorClean=location.pathname.split('/');
    return (
        <>

            <NavScreen />
            <AsideScreen />
            <div className="content-wrapper">
                {/* <div className="content-header" style={{minHeight:" 1302.12px;"}}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0" style={{textTransform:'capitalize'}}>{nameRutorClean[1]}</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        {
                                            (
                                            <Link to={location?.pathname}>
                                                {nameRutorClean[1]}
                                                </Link>
                                    )
                                    }
                                   </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                   */}
                <div className="container-fluid">
                        <Routes>
                            <Route path='/' element={<Navigate to='/dashboard' replace />}></Route>
                            <Route path='rol' element={<RolPage />}></Route>
                            <Route path='/school' element={<SchoolPage />}></Route>
                            <Route path='/city' element={<CityPage />}></Route>
                            <Route path='/state' element={<StatePage />}></Route>
                            <Route path='/course' element={<CoursePage />}></Route>
                            <Route path='user' element={<UserPage />}></Route>
                            <Route path='student' element={<StudentPage />}></Route>
                            <Route path='instructor' element={<InstructorPage/>}></Route>
                            <Route path='language' element={<LanguagePage/>}></Route>
                        </Routes>
                    
                    </div>
            </div>
            <FooterScreen />
     
        </>
    )
}