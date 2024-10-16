import { useState } from 'react'
import { CourseModel } from '../../model/CourseModel';

import { AddCourse } from '../../../services';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Icon, Switch } from '@mui/material';
import './index.css';


export const CourseForm = () => {
  const [course, setCourse] = useState(CourseModel);
  const courseMutation = AddCourse()


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(course)
    courseMutation.mutate({ ...course });
    //...
  }
  return (

    <>
      <Box
   component="form"
        onSubmit={handleSubmit}
        sx={{ width: 500, maxWidth: '100%' }}>
          <div className='course-form'>
        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          name='name'
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
     
            </div>
        <div className='course-button'>
        <Switch
             checked={course.active}
              onChange={(e)=> setCourse({...course,active: e.target.checked})}
              inputProps={{ 'aria-label': 'controlled' }}
              name='active'
            /> 
          <Button variant="contained" type='submit'>
            <Icon>save</Icon> Save
          </Button>
      </div>
      </Box>
    </>
  )
}
