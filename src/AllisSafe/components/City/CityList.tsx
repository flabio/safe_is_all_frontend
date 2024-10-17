
import Skeleton from 'react-loading-skeleton';
import { ICity } from '../../../interfaces';
import {  useCities, useDeleteCityById } from '../../../services';
import Swal from 'sweetalert2';

export const CityList =({setEditData,setFlagSelected }: any) => {
  const {data,isLoading} = useCities()

  const mutationDelete=useDeleteCityById()
   
    const editByIdCityHandler = async (city:ICity) => {
      setFlagSelected(false)
      setEditData(city)
    }

    const deleteRolByIdHandler = async (id: number) => {
    
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
         mutationDelete.mutate(id)
       
        
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
        isLoading !== undefined ? (
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>editByIdCityHandler(item)}>Edit</button>
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


