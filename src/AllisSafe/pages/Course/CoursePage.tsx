import React, { useContext, useState } from 'react'
import { UserContext } from '../../../hook';
import { CourseForm, CourseList } from '../../components';

export const CoursePage = () => {
    const [flagSelected, setFlagSelected] = useState<boolean>(true)
    const {  setDataContext } = useContext(UserContext);

    const flagSelectedHandler = (flag: boolean) => {
        setFlagSelected(!flag)
        setDataContext({})
    }
    return (
        <>
            <div className='row'>
                <div className="col-12">
                    <div className="card card-orange">
                        <div className="card-header p-2">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => flagSelectedHandler(flagSelected)}>
                                        <i className='fa fa-list'></i> Course
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => flagSelectedHandler(flagSelected)}>
                                        <i className='fa fa-plus'></i>  Create Course
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="card-body">
                            {
                                flagSelected ? (
                                    <>
                                        <div className="tab-content">
                                            <div className="card-body" >
                                                <CourseList />
                                            </div>
                                        </div>
                                    </>
                                ) :
                                    <>
                                        <div className="tab-content">
                                            <CourseForm />
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
