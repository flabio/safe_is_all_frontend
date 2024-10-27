
import Skeleton from 'react-loading-skeleton';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import { ICity } from '../../../interfaces';
import { useDeleteCityById } from '../../../services';
import Swal from 'sweetalert2';
import { Box, Button } from '@mui/material';




const paginationModel = { page: 0, pageSize: 5 };

export const CityList = ({ dataCities, setEditData,setValue }: any) => {
  const { data, isLoading } = dataCities

  const mutationDelete = useDeleteCityById()

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'name', headerName: 'Name', width: 230 },
  
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 2,marginTop:1 }}>
        <Button
        variant="contained"
        color="primary"
        size="small"
          onClick={() => editByIdCityHandler(params.row)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => deleteRolByIdHandler(params.row?.id)}
        >
          Delete
        </Button>
        {/* Puedes agregar más botones aquí */}
      </Box>
        
      ),
      
    },
  ];
  const editByIdCityHandler = async (city: ICity) => {
 
    setEditData(city)
    setValue(1)
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

  const handleRowClick = (params: GridRowParams) => {
    console.log(params.row); // Esto te dará acceso a los datos de la fila
  };
  return (
    <>
 
      {
        (
          !isLoading? (
            <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
               rows={data}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10,15,20,50,100]}
              checkboxSelection
              sx={{ border: 0 }}
              onRowClick={handleRowClick}
            />
          </Paper>
          )
            : <><Skeleton count={5} />
            </>)
      }

    </>
  )
}


