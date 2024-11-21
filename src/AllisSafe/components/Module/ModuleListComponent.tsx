import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryModules } from '../../../services';
import { UserContext } from '../../../hook';
export const ModuleListComponent = ({ setValue }: any) => {
  const { setDataContext } = useContext(UserContext);
    const { data, isLoading } = useQueryModules()
    const editModuleHandler=(row)=>{
      setDataContext(row)
      setValue(1)
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
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Path</TableCell>
                    <TableCell align="left">Order</TableCell>
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
                        {row.icon}
                      </TableCell>
                      <TableCell align="left">
                        {row.order}
                      </TableCell>
                      <TableCell align="left">
                        {row.active ? "active" : "inactive"}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="success"
                          onClick={()=> editModuleHandler(row)}
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                        <Button className="btn btn-danger ml-1" color="error"  startIcon={<DeleteIcon />}>
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
  
  
  