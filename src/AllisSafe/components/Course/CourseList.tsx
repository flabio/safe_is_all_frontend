
import Skeleton from 'react-loading-skeleton';
import { Avatar,Button, Card,  DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


import { DeleteCourse } from '../../../services';
import EditIcon from '@mui/icons-material/Edit';
import TopicIcon from '@mui/icons-material/Topic';
import DeleteIcon from '@mui/icons-material/Delete';
import { TopicListAndForm } from './TopicListAndForm';
import { useState } from 'react';



export const CourseList = ({dataCourse}:any) => {
  const { isLoading, data } = dataCourse;
 const [topic,setTopic]=useState('');
 const [open, setOpen] = useState(false);
  const deleteMutation=DeleteCourse()

  const deleteCourseByIdHandler = async (id: number) => {
    //...
    deleteMutation.mutate(id)
    //...
  };
  const editByIdCourseHandler = (course: any) => {
    console.log(course)
    //...
  };
  const topicHandler = (course: any) => {
    setTopic(course)
    setOpen(true);
    //...
  };

  return (
    <>
 
 <TopicListAndForm  open={open} setOpen={setOpen} topic={topic} setTopic={setTopic} />

      {
        (
          !isLoading ? (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                     
                      <TableCell align="left">Name</TableCell>
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
                       
                        <TableCell align='center'>
                     <Button
                     color="inherit"
                      startIcon={<TopicIcon/>}
                     onClick={() => topicHandler(row)}
                     >
                      Topic

                     </Button>
                          <Button
                            className="btn btn-success btn-sm ml-1"
                            color="success"
                            startIcon={<EditIcon />}
                            onClick={() => editByIdCourseHandler(row)}>

                            Edit
                          </Button>
                          <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteCourseByIdHandler(row.id)} startIcon={<DeleteIcon />}>
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


