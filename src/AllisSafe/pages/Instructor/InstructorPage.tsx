import { useContext, useState } from 'react'
import { InstructorList } from '../../components';
import { UserContext } from '../../../hook';

export const InstructorPage = () => {
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
                                              <InstructorList/>
                                          </div>
                                      </div>
                                  </>
                              ) :
                                  <>
                                      <div className="tab-content">
                                        
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
