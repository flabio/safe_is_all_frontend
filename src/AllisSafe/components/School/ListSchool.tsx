

import Skeleton from 'react-loading-skeleton';
import { ISchool } from '../../../interfaces';
import { DeleteSchoolById, QueriesTodosSchools } from '../../../services';
import Swal from 'sweetalert2';
import "./style.css";
import { useState } from 'react';
import { Avatar, Button, Card, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CancelIcon from '@mui/icons-material/Cancel';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export const ListSchool = ({ setSchoolData, setFlagSelected }: any) => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
  const [schoolInfo, setSchoolInfo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = QueriesTodosSchools(currentPage)

  const queryDeteleSchool = DeleteSchoolById(currentPage)

  const editByIdSchoolHandler = async (school: ISchool) => {
    setFlagSelected(false)
    setSchoolData(school)
  }
  const infoSchoolModalHandler = (school: ISchool) => {
    console.log(school)
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
        queryDeteleSchool.mutate(id)


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

  const onPrevious = (page: number) => {
    setCurrentPage(page - 1)
  };
  const onNext = (page: number) => {
    console.log(page + " -> " + page)
    if (data?.data?.length === undefined || data?.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(currentPage + page)
    }
  }
  const handleClickOpen = (school: ISchool) => {
    setOpen(true);
    setSchoolInfo(school);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}

      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {schoolInfo.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Card sx={{ maxWidth: fullWidth }}>
            <CardMedia
              sx={{ height: 200 }}
              image={schoolInfo?.url}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {schoolInfo.name}
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={schoolInfo.address} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={schoolInfo.phone} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={schoolInfo.email} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <RepeatOneOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Zip Code" secondary={schoolInfo.zip_code} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FiberPinIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Provider" secondary={schoolInfo.provider_number} />
                </ListItem>
              </List>

            </CardContent>
            <CardActions>
              <Button size="small" color='success' startIcon={<EditIcon />}
                onClick={() => editByIdSchoolHandler(schoolInfo)}>Edit</Button>
              <Button size="small" color='error' startIcon={<DeleteIcon />}
                onClick={() => editByIdSchoolHandler(item)}>Remove</Button>
              <Button color='inherit' autoFocus onClick={handleClose} startIcon={<CancelIcon />}>
                Close
              </Button>

            </CardActions>
          </Card>
        </DialogContent>
      </BootstrapDialog>


      {
        (
          !isLoading ? (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Image </TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Phone</TableCell>
                      <TableCell align="center">Option</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.data?.map((row: any) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">
                          <CardMedia
                            sx={{ width:100,height: 100 }}
                            image={row?.url}
                            title="green iguana"
                          />
                        </TableCell>
                        <TableCell align="left">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell>
                          <Button
                            className="btn btn-primary btn-sm"
                            startIcon={<ListAltIcon />}
                            onClick={() => handleClickOpen(item)}>
                            Info
                          </Button>
                          <Button
                            className="btn btn-success btn-sm ml-1"
                            color="success"
                            startIcon={<EditIcon />}
                            onClick={() => editByIdSchoolHandler(item)}>

                            Edit
                          </Button>
                          <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteSchoolByIdHandler(item.id)} startIcon={<DeleteIcon />}>
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
             
              <hr />
              <div className='d-flex justify-content-between'>
                <span>
                  total records: <b>{data?.total_count}</b>
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
                  current page: <b>{currentPage}  { }</b>
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


