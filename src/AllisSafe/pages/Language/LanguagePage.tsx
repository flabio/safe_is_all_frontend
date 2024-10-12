
import {  useState } from 'react';
import {  LanguageList } from '../../components';
import { CityModel } from '../../model';
import { useQueryLanguages } from '../../../services';

export const LanguagePage = () => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const [editData, setEditData] = useState<any>(CityModel)
  const useQueryTodosLanguages:any=useQueryLanguages(currentPage);
  
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
                        <LanguageList currentPage={currentPage} setCurrentPage={setCurrentPage} useQueryTodosLanguages={useQueryTodosLanguages} />
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


