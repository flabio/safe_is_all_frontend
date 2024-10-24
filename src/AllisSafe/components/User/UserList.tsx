import { useContext, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { DeleteUser, queriesTodosUser } from '../../../services/UserService';
import { UserContext } from '../../../hook';
import { Avatar, Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';




export const UserList = ({ setValue }) => {
  const { setDataContext } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [user,setUser] = useState();
  const [open, setOpen] = useState(false);
  const { isLoading, data }: any = queriesTodosUser(currentPage)


  const detaildUserHandler = (row:any) => {
    setOpen(true);
    setUser(row);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const response = DeleteUser(currentPage)



  const deleteUserByIdHandler = async (id: number) => {

    response.mutate(id)
  };
  const editByIdUserHandler = (user: any) => {
    setDataContext(user)
    setValue(1)


  };
  const onPrevious = (page: number) => {
    setCurrentPage(page - 1)
  };
  const onNext = (page: number) => {
    if (data?.data?.length === undefined || data?.data?.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(page + 1)
    }
  }
  return (
    <>
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align='center' id="alert-dialog-title">
          {"user information"}
          <hr/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TableContainer component={Paper}>
                <Table className='table-striped' aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">First Name</TableCell>
                      <TableCell align="left">Last Name</TableCell>
                      <TableCell align="left">Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                       <TableCell align="left">{user?.first_name}</TableCell>
                        <TableCell align="left">{user?.first_sur_name} {user?.secon_sur_name}</TableCell>
                        <TableCell align="left">{user?.phone}</TableCell>
                      </TableRow>
                  </TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Address</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Zip Code</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                       <TableCell align="left">{user?.address}</TableCell>
                        <TableCell align="left">{user?.email}</TableCell>
                        <TableCell align="left">{user?.zip_code}</TableCell>
                      </TableRow>
                  </TableBody>
                  </Table>
                  <hr/>
                  <Table className='table-striped'>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Rol</TableCell>
                      <TableCell align="left">State</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                       <TableCell align="left">{user?.rol_name}</TableCell>
                        <TableCell align="left">{user?.state_name}</TableCell>
                        
                      </TableRow>
                    
                  </TableBody>
                </Table>
              </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {
        (
          !isLoading ? (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell align="center">Avatar</TableCell>
                      <TableCell align="left">First Name</TableCell>
                      <TableCell align="left">Last Name</TableCell>
                      <TableCell align="left">Phone</TableCell>
                
                      <TableCell align="center">Options</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.data?.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">
                          
                          <Avatar alt={row?.first_name} src={row?.avatar} variant="rounded" />
                        </TableCell>
                        <TableCell align="left">{row.first_name}</TableCell>
                        <TableCell align="left">{row.first_sur_name} {row.secon_sur_name}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                    
                       
                        <TableCell align="center">
                          <TableCell>
                          <Button
                              color="primary"
                              startIcon={<ListAltIcon />}
                              onClick={() => detaildUserHandler(row)}>
                              Info
                            </Button>
                            <Button
                              color="success"
                              startIcon={<EditIcon />}
                              onClick={() => editByIdUserHandler(row)}>
                              Edit
                            </Button>
                            <Button
                              color="error"
                              onClick={() => deleteUserByIdHandler(row.id)} startIcon={<DeleteIcon />}>
                              Remove
                            </Button>
                          </TableCell>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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


