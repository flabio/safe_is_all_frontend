import { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDeleteStateById } from '../../../services'
import { UserContext } from '../../../hook';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export const StateList = ({ data, isLoading ,setValue}: any) => {
  const { setDataContext } = useContext(UserContext);

  const deleteMutation = useDeleteStateById()
  const editByIdCityHandler = (state: any) => {
    setDataContext(state)
    setValue(1)
  }
  const deleteRolByIdHandler = (id: number) => {
    deleteMutation.mutate(id)

  }
  return (
    <>

      {
        (

          !isLoading ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>

                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">City</TableCell>
                    <TableCell align="left">zip Code</TableCell>
                    <TableCell align="left">IsActive</TableCell>
                    <TableCell align="center">Option</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row: any) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                      <TableCell align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.city.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.zip_code}
                      </TableCell>
                      <TableCell align="left">
                        {row.active ? "active" : "inactive"}
                      </TableCell>


                      <TableCell align='center'>

                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="success"
                          startIcon={<EditIcon />}
                          onClick={() => editByIdCityHandler(row)}>
                          Edit
                        </Button>
                        <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteRolByIdHandler(row.id)} startIcon={<DeleteIcon />}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          )
            : <><Skeleton count={5} />
            </>)
      }

    </>
  )
}

