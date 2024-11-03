import { Autocomplete, Box, Button,  Checkbox, DialogTitle,  Icon, IconButton, TableHead, TextField } from '@mui/material';
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
const top100Films = [
  { label: '', id: 0 },
];
export const SchoolWithCourses = ({ coursesSchool, school, openSchool, setOpenSchool }: any) => {

  const { data, isLoading } = coursesSchool
  const addSchool = AddCourseSchool()
  const deleteSchool = DeleteCourseSchool()
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');
  const [autoSelection, setAutoSelection] = useState(top100Films)
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
    autoComplementeData(data)
  }, [data]);
  const autoComplementeData = async (data) => {
    console.log(data)
    setAutoSelection(data?.map((item: any) => ({
      label: item.name,
      id: item.id,
    })));
    console.log(autoSelection)
  }
  const handleChangeAutoComplete = (event: InputEventInit, value) => {
    setCourse({
      course_id: value.id,
      school_id: school.id,
    });
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSchool.mutate({
      ...course,
      id: 0,
      active: true
    })
  }
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openSchool}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ m: 2, p: 1 }} id="customized-dialog-title">
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
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <div className='row'>
            <div className='col-6'>
              <Autocomplete
                disablePortal
                options={autoSelection}
                sx={{ m: 2, width: 396 }}
                onChange={handleChangeAutoComplete}
                renderInput={(params) => <TextField
                  {...params}
                  label="Course"
                />}
              />
            </div>
            <div className='col-6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Button variant="contained" type='submit'>
                  <Icon>save</Icon>Save
                </Button>
              </div>
            </div>
          </div>
        </Box>
        <hr />
        <TableContainer component={Paper}>
          {
            !isLoading ? (
              <>
                <Table sx={{ m: 2, minWidth: 350 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Active</TableCell>
                      <TableCell align="left">Option</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((row: any) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>
                          {
                            row.course_schools?.map((item: any) => item?.school_id === school.id && (
                              <>
                                <Checkbox
                                  checked={item?.school_id === school.id ? true : false}
                                  inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <br />
                              </>
                            ))
                          }
                        </TableCell>
                        <TableCell>
                          {
                            row.course_schools?.map((item: any) => item?.school_id === school.id && (
                              <>
                                <IconButton onClick={() => deleteSchool.mutate(item.id)}>
                                  <Icon>delete</Icon>
                                </IconButton>
                              </>
                            ))
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )
              : <><Skeleton count={5} /></>
          }
        </TableContainer>
      </BootstrapDialog>
    </>
  )
}
