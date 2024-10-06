import  { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { DeleteUser, queriesTodosStudents } from '../../../services/UserService';

export const StudentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data }:any = queriesTodosStudents(currentPage)

  const response = DeleteUser(currentPage)



  const deleteUserByIdHandler = async (id: number) => {

    response.mutate(id)
  };
  const editByIdUserHandler = (user: any) => {
    console.log(user)

  };
  const onPrevious = (page: number) => {
    setCurrentPage(page - 1)
  };
  const onNext = (page: number) => {
    if (data?.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(page + 1)
    }
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
                    <th>Firt Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>ZipCode</th>
                    <th>Rol</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.first_sur_name} {item.secon_sur_name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.zip_code}</td>
                      <td>{item.rol_name}</td>
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
                  total records: <b>{data?.totalCount}</b>
                </span>
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onPrevious(currentPage)} disabled={currentPage === 1 ? true : false}>Previous</button>
                    </li>
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onNext(currentPage)} disabled={data?.data?.length === undefined || data?.data?.length < 5 ? true : false}>Next</button>
                    </li>
                  </ul>
                </nav>
                <span>
                  current page: <b>{data?.pageCount}  { }</b>
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


