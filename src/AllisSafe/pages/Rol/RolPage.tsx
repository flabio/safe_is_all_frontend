
import { useState } from 'react';
import { RolListComponent, RolForm } from '../../components';

const initForm = {
  id: 0,
  name: "",
  active: true
}


export const RolPage = () => {
  const [testDate, setTestData] = useState(false);
  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const [rolGData, setRolGData] = useState<any>(initForm)
  const flagSelectedHandler=(flag:boolean) => {
    setFlagSelected(flag)
    setRolGData({})
  }

  return (
    <>

      <div className='row'>
        <div className="col-12">
          <div className="card card-orange">
            <div className="card-header p-2">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" onClick={()=>flagSelectedHandler(true)}>
                    <i className='fa fa-list'></i> Roles 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={()=>flagSelectedHandler(false)}>
                  <i className='fa fa-plus'></i>  Create Rol
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
                        <RolListComponent testDate={testDate} setTestData={setTestData} setRolGData={setRolGData} setFlagSelected={setFlagSelected} />
                      </div>
                    </div>
                  </>
                ) :
                  <>
                    <div className="tab-content">
                      <RolForm setTestData={setTestData} rolGData={rolGData} setRolGData={setRolGData} />
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


