


import { useContext, useState } from 'react'
import { UserContext } from '../../../hook';
import { StudentForm, StudentList } from '../../components';

export const StudentPage = () => {
    const [flagSelected, setFlagSelected] = useState<boolean>(true)
    const {  setDataContext } = useContext(UserContext);
  
       
  
    const flagSelectedHandler = (flag: boolean) => {
        setFlagSelected(flag)
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
                                    <a className="nav-link" onClick={() => flagSelectedHandler(true)}>
                                        <i className='fa fa-list'></i> Users
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => flagSelectedHandler(false)}>
                                        <i className='fa fa-plus'></i>  Create user
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
                                                <StudentList/>
                                            </div>
                                        </div>
                                    </>
                                ) :
                                    <>
                                        <div className="tab-content">
                                            <StudentForm/>
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
  