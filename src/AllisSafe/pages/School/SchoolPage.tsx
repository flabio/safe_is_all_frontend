import  { useState } from 'react'
import { FormSchool, ListSchool } from '../../components';


const initForm = {
  id: 0,
  name: "",
  active: true
}
export const SchoolPage = () => {
  const [testDate, setTestData] = useState(false);
  console.log(testDate);
  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const [schoolData, setSchoolData] = useState<any>(initForm)
  const flagSelectedHandler=(flag:boolean) => {
    setFlagSelected(flag)
    setSchoolData({})
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
                    <i className='fa fa-list'></i> Schools 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={()=>flagSelectedHandler(false)}>
                  <i className='fa fa-plus'></i>  Create School
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
                        <ListSchool  setSchoolData={setSchoolData} setFlagSelected={setFlagSelected} />
                      </div>
                    </div>
                  </>
                ) :
                  <>
                    <div className="tab-content">
                      <FormSchool setTestData={setTestData} schoolData={schoolData} setSchoolData={setSchoolData} />
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


