

import Skeleton from 'react-loading-skeleton';
import {  ILanguage,  } from '../../../interfaces';


export const LanguageList = ({currentPage,setCurrentPage,useQueryTodosLanguages}:any) => {
  //const [currentPage, setCurrentPage] = useState(1);
 // const {data:languajeDatas,isLoading}:any=useQueryLanguages(currentPage);
 //const [currentPage, setCurrentPage] = useState(1);
 
 const {data:languajeDatas,isLoading}:any=useQueryTodosLanguages;

  const onPrevious = (page: number) => {
    setCurrentPage(page - 1)
  };
  const onNext = (page: number) => {
    if (languajeDatas.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(page + 1)
    }
  }
  const editByIdUserHandler=(row:ILanguage)=>{
    console.log(row)
  }
  const deleteUserByIdHandler=(id:number)=>{
    console.log(id)
  }
  return (
    <>
      
      {
        (
          !isLoading ? (
            <>
              <div className='d-flex justify-content-between m-2'>
                <select className='col-2 form-control'>
                  <option>
                    5
                  </option>
                  <option>
                    10
                  </option>
                  <option>
                    20
                  </option>
                  <option>
                    50
                  </option>
                  <option>
                    10
                  </option>
                </select>
                <form>
                  <input type='search' placeholder='search user' className='form-control' />
                </form>

              </div>
              
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>IsActive</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {languajeDatas?.data?.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td> {item.active?"Active":"Inactive"} </td>
                      <td>
                        <button className="btn btn-primary btn-sm" onClick={() => editByIdUserHandler(item)}>Edit</button>
                        <a className="btn btn-danger btn-sm ml-2" onClick={() => deleteUserByIdHandler(item.id)}>Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <hr />
              <div className='d-flex justify-content-between'>
                <span>
                  total records: <b>{languajeDatas?.totalCount || 0}</b>
                </span>
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onPrevious(currentPage)} disabled={currentPage === 1 ? true : false}>Previous</button>
                    </li>
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onNext(currentPage)} disabled={languajeDatas?.data?.length === undefined || languajeDatas?.data?.length < 5 ? true : false}>Next</button>
                    </li>
                  </ul>
                </nav>
                <span>
                  current page: <b>{languajeDatas?.data?.length|| 0} </b>
                </span>
              </div>

            </>
          )
            : <><Skeleton count={5} />
            </>)
      }

    </>

  )
}
