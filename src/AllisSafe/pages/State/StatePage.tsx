import { useContext, useEffect, useState } from 'react'
import { StateForm, StateList } from '../../components'

import { useCities, useStates } from '../../../services'
import { UserContext } from '../../../hook'

export const StatePage = () => {
  const { data, isLoading } = useStates()
  const cityData=useCities()
  const [flagSelected, setFlagSelected] = useState<boolean>(true)
  const {dataContext,setDataContext} = useContext(UserContext);
  
  useEffect(()=>{
    if(dataContext?.id>0){
      setFlagSelected(false)
    }
  },[dataContext])
  const flagSelectedHandler = (flag: boolean) => {
    setFlagSelected(flag)
    if(flag) {
      setDataContext("")
      setFlagSelected(flag)
    } 
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
                    <i className='fa fa-list'></i> States
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => flagSelectedHandler(false)}>
                    <i className='fa fa-plus'></i>  Create state
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
                        <StateList data={data} isLoading={isLoading}  />
                      </div>
                    </div>
                  </>
                ) :
                  <>
                    <div className="tab-content">
                      <StateForm cityData={cityData} />
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



