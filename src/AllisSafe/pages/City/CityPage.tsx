
import {  useState } from 'react';
import { CityFrom, CityList } from '../../components';
import { CityModel } from '../../model';

export const CityPage = () => {

  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const [editData, setEditData] = useState<any>(CityModel)
  const flagSelectedHandler=(flag:boolean) => {
    setFlagSelected(flag)
    setEditData({})
  }
//console.log(edit)
  return (
    <>

      <div className='row'>
        <div className="col-12">
          <div className="card card-orange">
            <div className="card-header p-2">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" onClick={()=>flagSelectedHandler(true)}>
                    <i className='fa fa-list'></i> Cities 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={()=>flagSelectedHandler(false)}>
                  <i className='fa fa-plus'></i>  Create city
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
                        <CityList setEditData={setEditData} setFlagSelected={setFlagSelected} />
                      </div>
                    </div>
                  </>
                ) :
                  <>
                    <div className="tab-content">
                      <CityFrom   editData={editData} setEditData={setEditData}  />
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


