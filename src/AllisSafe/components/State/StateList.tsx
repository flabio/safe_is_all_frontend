import { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDeleteStateById } from '../../../services'
import { UserContext } from '../../../hook';


export const StateList = ({ data, isLoading }: any) => {
  const {setDataContext} = useContext(UserContext);
  
  const deleteMutation = useDeleteStateById()
  const editByIdCityHandler = (state: any) => { 
    setDataContext(state)
  }
  const deleteRolByIdHandler = (id: number) => {
    deleteMutation.mutate(id)

  }
  return (
    <>
      {
        (
          isLoading !== undefined ? (
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.city.name}</td>
                    <td>{item.name}</td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => editByIdCityHandler(item)}>Edit</button>
                      <a className="btn btn-danger btn-sm ml-2" onClick={() => deleteRolByIdHandler(item.id)}>Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
            : <><Skeleton count={100} />
            </>)
      }

    </>
  )
}


