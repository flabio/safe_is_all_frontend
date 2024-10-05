import { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import { ISchool } from '../../../interfaces';
import { deteleSchoolById, QueriesTodosSchools } from '../../../services';
import Swal from 'sweetalert2';


export const ListSchool = ({ setSchoolData,setFlagSelected }: any) => {
  const [schools, setSchools] = useState<ISchool[]>([])
  const {data,isLoading}=QueriesTodosSchools()

    const editByIdSchoolHandler = async (school:ISchool) => {
      setFlagSelected(false)
      setSchoolData(school)
    }

    const deleteSchoolByIdHandler = async (id: number) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          deteleSchoolById(id)
       
        
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
    
   
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
            {data?.map((item, index) => (
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


