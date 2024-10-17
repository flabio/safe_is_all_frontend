import { useEffect, useState } from 'react';
import { deteleRolById, queryRoles } from '../../../services/rolService';
import { IRol } from '../../../interfaces/IRol';
import Skeleton from 'react-loading-skeleton';


export const RolListComponent = ({ testDate,setTestData,setRolGData,setFlagSelected }: any) => {
  const [rolData, setRolData] = useState<IRol[]>([])
    useEffect(() => {
      if (testDate) {
        setTimeout(() => {
          getListRoles()
        }, 1000);
        setTestData(false)
      }else{
        getListRoles()
      }
    }, [testDate,setTestData])

    const getListRoles = async () => {
      const { data }:any = await queryRoles()
      setRolData(data?.data)
    }
    const editByIdRolHandler = async (rol:IRol) => {
      setFlagSelected(false)
      setRolGData(rol)
    }

    const deleteRolByIdHandler = async (id: number) => {
      
      await deteleRolById(id)
      getListRoles()
      
    }
    return (
      <>
{
        (
        rolData !== undefined ? (
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {rolData?.map((rol, index) => (
              <tr key={index}>
                <td>{rol.id}</td>
                <td>{rol.name}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>editByIdRolHandler(rol)}>Edit</button>
                  <a className="btn btn-danger btn-sm ml-2" onClick={() => deleteRolByIdHandler(rol.id)}>Delete</a>
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


