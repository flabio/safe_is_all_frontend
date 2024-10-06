
import {  useState } from 'react';
import {  LanguageList } from '../../components';
import { CityModel } from '../../model';

export const LanguagePage = () => {

  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const [editData, setEditData] = useState<any>(CityModel)
  console.log(editData)
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
                        <LanguageList  />
                      </div>
                    </div>
                  </>
                ) :
                  <>
                    <div className="tab-content">
                     <h1>Form</h1>
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


