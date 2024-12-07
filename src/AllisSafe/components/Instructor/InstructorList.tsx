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
import PortraitIcon from '@mui/icons-material/Portrait';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';

import { DeleteUser, EditUserAvatar, EditUserPassword, queriesTodosInstructor } from '../../../services/UserService';
import { Avatar, Box, Button, Divider, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { IUserRequest } from '../../../interfaces';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserModelPassword } from '../../model';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { UserContext } from '../../../hook';
export const InstructorList = ({ setValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data }: any = queriesTodosInstructor(currentPage)
  const { dataContext, setDataContext }: any = useContext(UserContext);
  const [password,setPassword] = useState(UserModelPassword)
  const [showPassword, setShowPassword] = useState(false);

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const response = DeleteUser(currentPage)
  const editAvatar = EditUserAvatar();
  const editPassword = EditUserPassword();

  const detaildUserHandler = (row: IUserRequest) => {
    setDataContext(row);
    setValue(2)
  };
  const deleteUserByIdHandler = async (id: number) => {
    response.mutate(id)
  };
  const editByIdUserHandler = (user: IUserRequest) => {
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
  const handleClickOpen = (row: IUserRequest) => {
    setOpen(true);
    setDataContext(row);
  };
  const handlePasswordClickOpen = (row: IUserRequest) => {
    setOpenPassword(true);
    setDataContext(row);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  }
  const handleEditAvatar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    editAvatar.mutate({ id: dataContext?.id, data });
  };
  const handleEditPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    password.id=dataContext?.id
    editPassword.mutate(password);
    setOpenPassword(false);
  }

  return (
    <>
      <Dialog onClose={handleClose} open={openPassword}>
        <DialogTitle>{dataContext?.first_name} {dataContext?.last_name}</DialogTitle>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Opcional: centra los elementos horizontalmente
            '& .MuiTextField-root': { p: 1, width: '40ch', margin: '150px' }
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleEditPasswordSubmit}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name='password'
                value={password.password}
                onChange={(e) => setPassword({...password, password: e.target.value })}
              />
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password Confirmation</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password confirmation"
                name='password_confirmation'
                value={password.password_confirmation}
                onChange={(e) => setPassword({...password, password_confirmation: e.target.value })}
              />
            </FormControl>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
            <Button variant="contained" type='submit'>
              <Icon>save</Icon> Save
            </Button>
          </div>
        </Box>
      </Dialog>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{dataContext?.first_name} {dataContext?.last_name}</DialogTitle>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Opcional: centra los elementos horizontalmente
            '& .MuiTextField-root': { p: 1, width: '45ch', margin: '150px' }
          }}
          noValidate
          autoComplete="off"
          encType="multipart/form-data"
          onSubmit={handleEditAvatar}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <Avatar
              alt={dataContext?.first_name}
              src={dataContext?.avatar}
              sx={{ width: 100, height: 100 }}
              variant="rounded"
            />
            <Divider orientation="vertical" flexItem></Divider>
            <FormControl sx={{ m: 2, minWidth: '20%' }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-first-name"
                type='file'
                name='file'
                onChange={handleFileChange}
              />
            </FormControl>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
            <Button variant="contained" type='submit'>
              <Icon>save</Icon> Save
            </Button>
          </div>
        </Box>
      </Dialog>
      {
        (
          !isLoading ? (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
      
                      <TableCell align="center">Avatar</TableCell>
                      <TableCell align="left">Full Name</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="left">Rol</TableCell>
                      <TableCell align="center">Options</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data?.data.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                    
                        <TableCell align="center">
                          <Avatar alt={row?.first_name} src={row?.avatar} variant="rounded" />
                        </TableCell>
                        <TableCell align="left">{row?.first_name} {row?.last_name} </TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="left">{row.rol_name}</TableCell>
                        <TableCell align="center">
                          <TableCell align="center">
                          
                          <Button
                              color="inherit"
                              onClick={() => handleClickOpen(row)}>
                              <Tooltip color="inherit" title="change avatar">
                                <IconButton>
                                  <CollectionsBookmarkIcon />
                                </IconButton>
                              </Tooltip>
                            </Button>
                            <Button
                              color="inherit"
                              onClick={() => handleClickOpen(row)}>
                              <Tooltip color="inherit" title="change avatar">
                                <IconButton>
                                  <PortraitIcon />
                                </IconButton>
                              </Tooltip>
                            </Button>
                            <Button
                              color="warning"
                              onClick={() => handlePasswordClickOpen(row)}>
                              <Tooltip color="warning" title="change password">
                                <IconButton>
                                  <VisibilityIcon />
                                </IconButton>
                              </Tooltip>
                            </Button>
                            <Button
                              onClick={() => detaildUserHandler(row)}>
                              <Tooltip color="primary" title="Detail">
                                <IconButton>
                                  <ListAltIcon />
                                </IconButton>
                              </Tooltip>
                            </Button>
                            <Button
                              color="success"
                              onClick={() => editByIdUserHandler(row)}>
                              <Tooltip color="success" title="Edit">
                                <IconButton>
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                            </Button>
                            <Button
                              onClick={() => deleteUserByIdHandler(row.id)} >
                              <Tooltip color="error" title="Delete">
                                <IconButton>
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
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


