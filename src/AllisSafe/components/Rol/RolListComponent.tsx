import { useContext, useState } from 'react';
import { deteleRolById } from '../../../services/rolService';
import { IRol } from '../../../interfaces/IRol';
import Skeleton from 'react-loading-skeleton';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { queriesTodosRol } from '../../../services';
import { UserContext } from '../../../hook';


export const RolListComponent = ({ setValue }: any) => {
  const { data, isLoading } = queriesTodosRol()
  const { setDataContext } = useContext(UserContext);

  const editByIdRolHandler = async (rol: IRol) => {
    setDataContext(rol)
    setValue(1)
  }

  const deleteRolByIdHandler = async (id: number) => {
    await deteleRolById(id)
  }
  const handleClickAddCourseOpen = (row:IRol) => {
    setDataContext(row)
    setValue(2)
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
                    <TableCell align="left">Active</TableCell>
                    <TableCell align="center">Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.map((row: any) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.active ? "active" : "inactive"}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="inherit"
                          startIcon={<AppRegistrationIcon />}
                          onClick={() => handleClickAddCourseOpen(row)}>
                          Module
                        </Button>
                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="success"
                          startIcon={<EditIcon />}
                          onClick={() => editByIdRolHandler(row)}>
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


