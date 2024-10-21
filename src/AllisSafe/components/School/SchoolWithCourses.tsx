import { Checkbox, DialogTitle, IconButton, TableHead } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Skeleton from 'react-loading-skeleton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { useEffect, useState } from 'react';
import { AddCourseSchool, DeleteCourseSchool } from '../../../services';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const SchoolWithCourses = ({coursesSchool, school, openSchool, setOpenSchool }:any) => {

  const { data, isLoading } = coursesSchool

  const addSchool = AddCourseSchool()
  const deleteSchool = DeleteCourseSchool()
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');

  const [course, setCourse] = useState({
  
    course_id: 0,
    school_id: 0
  });
   
  const handleClose = () => {
    setFullWidth(true)
    setMaxWidth('md')
    setOpenSchool(false);
  };

  useEffect(() => {
    if (course.course_id > 0) {
      addSchool.mutate({ ...course,
        id: 0, 
        active: true 
         })
    }
  }, [course]);
 
  const handleChange = (row:any) => {
console.log(row?.course_schools)
    if (row?.course_schools[0]?.school_id===school.id) {
      deleteSchool.mutate(row?.course_schools[0].id)
    } else {
      setCourse({
        course_id: row.id,
        school_id: school.id,
      });
    }
    
  };

  return (
    <>
      
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openSchool}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              {school.name}
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
            <TableContainer component={Paper}>
            {
        !isLoading ? (
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row:any) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 160 }} >
                        {
                          row.course_schools?.length > 0 ? row.course_schools?.map((item:any) => (
                            <>
                              <Checkbox
                                checked={item?.school_id === school.id ? true : false}
                                onClick={() => handleChange(row)}
                                inputProps={{ 'aria-label': 'controlled' }}
                              />
                              <br />
                            </>)) : (
                            <>
                              <Checkbox
                                checked={false}
                                onClick={() => handleChange(row)}
                                inputProps={{ 'aria-label': 'controlled' }}
                              />
                            </>
                          )
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
                  )
                  : <><Skeleton count={5} /></>
              }
            </TableContainer>
          </BootstrapDialog>
    
    </>
  )
}
