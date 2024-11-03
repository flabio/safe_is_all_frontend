import Skeleton from 'react-loading-skeleton';
import { ISchool } from '../../../interfaces';
import { DeleteSchoolById, queriesTodosCoursesSchool, QueriesTodosSchools } from '../../../services';
import Swal from 'sweetalert2';
import "./style.css";
import { useState } from 'react';
import { Avatar, Box, Button, Card, Collapse, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SchoolWithCourses } from './SchoolWithCourses';
import { SchoolModel } from '../../model';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export const ListSchool = ({ setValue, setSchoolData }: any) => {
  const [open, setOpen] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');
  const [schoolInfo, setSchoolInfo] = useState(SchoolModel);
  const [currentPage, setCurrentPage] = useState(1);
  const [school, setSchool] = useState(0);
  const [openSchool, setOpenSchool] = useState(false);
  const { data, isLoading } = QueriesTodosSchools(currentPage)
  const coursesSchool = queriesTodosCoursesSchool()
  const queryDeteleSchool = DeleteSchoolById(currentPage)
  const editByIdSchoolHandler = async (school: ISchool) => {
    setSchoolData(school)
    setFullWidth(true)
    setMaxWidth('md')
    setValue(1)
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
    if (data?.data?.length === undefined || data?.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(currentPage + page)
    }
  }
  const handleClickOpen = (school) => {
    setOpen(true);
    setSchoolInfo(school);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickAddCourseOpen = (row) => {
    setOpenSchool(true);
    setSchool(row)
  }
  return (
    <>
      <SchoolWithCourses coursesSchool={coursesSchool} school={school} openSchool={openSchool} setOpenSchool={setOpenSchool} />
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
          <Card sx={{ maxWidth: 'md' }}>
            <CardMedia
              sx={{ height: 340 }}
              image={schoolInfo?.url}
              title="green iguana"
            />
            <CardContent>
              <div className='list-item'>
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
                        <RepeatOneOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Zip Code" secondary={schoolInfo.zip_code} />
                  </ListItem>
                </List>
              </div>
              <div className='list-item'>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                        <FiberPinIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Provider" secondary={schoolInfo.provider_number} />
                  </ListItem>
                </List>
              </div>
              <hr />
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align='left'>Courses</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      coursesSchool.data?.map((course) => course.course_schools[0]?.school_id === schoolInfo?.id && (
                        <>
                          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                            <TableCell>
                              <IconButton
                                aria-label="expand row"
                                size="small"
                                onClick={() => setOpenTopic(!openTopic)}
                              >
                                {openTopic ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                              </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {course.name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                              <Collapse in={openTopic} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                  <Typography variant="h6" gutterBottom component="div">
                                    Topics
                                  </Typography>
                                  <Table size="small" aria-label="purchases">
                                    <TableHead>
                                      <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="left">Hours</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {
                                        course.course_schools && course.course_schools?.map((item: any, index: any) => (
                                          <>
                                            <TableRow key={index}>
                                              <TableCell component="th" scope="row">
                                                example
                                              </TableCell>
                                              <TableCell component="th" scope="row">
                                                {item.id} hours
                                              </TableCell>
                                            </TableRow>
                                          </>
                                        ))
                                      }
                                    </TableBody>
                                  </Table>
                                </Box>
                              </Collapse>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
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
                    {data?.data?.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">
                          <CardMedia
                            sx={{ width: 100, height: 100 }}
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
                            color="inherit"
                            startIcon={<PlaylistAddIcon />}
                            onClick={() => handleClickAddCourseOpen(row)}>
                            Course
                          </Button>
                          <Button
                            startIcon={<ListAltIcon />}
                            onClick={() => handleClickOpen(row)}>
                            Info
                          </Button>
                          <Button
                            className="btn btn-success btn-sm ml-1"
                            color="success"
                            startIcon={<EditIcon />}
                            onClick={() => editByIdSchoolHandler(row)}>
                            Edit
                          </Button>
                          <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteSchoolByIdHandler(row.id)} startIcon={<DeleteIcon />}>
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


