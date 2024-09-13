import { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import { ISchool } from '../../../interfaces';
import { deteleSchoolById, querySchools } from '../../../services';


export const ListSchool = ({ testDate,setTestData,setSchoolData,setFlagSelected }: any) => {
  const [schools, setSchools] = useState<ISchool[]>([])
    useEffect(() => {
      if (testDate) {
        setTimeout(() => {
          getListSchools()
        }, 1000);
        setTestData(false)
      }else{
        getListSchools()
      }
    }, [testDate,setTestData])

    const getListSchools = async () => {
      const { data } = await querySchools()
      setSchools(data?.data)
    }
    const editByIdSchoolHandler = async (school:ISchool) => {
      setFlagSelected(false)
      setSchoolData(school)
    }

    const deleteSchoolByIdHandler = async (id: number) => {
      
      await deteleSchoolById(id)
      getListSchools()
      
    }
    return (
      <>
{
        (
          schools !== undefined ? (
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email</th>
              <th>Zip code</th>
              <th>Provider number</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {schools?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.zip_code}</td>
                <td>{item.provider_number}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>editByIdSchoolHandler(item)}>Edit</button>
                  <a className="btn btn-danger btn-sm ml-2" onClick={() => deleteSchoolByIdHandler(item.id)}>Delete</a>
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


