import { useContext, useEffect, useState } from 'react'
import { CourseModel } from '../../model/CourseModel';

import { AddCourse, EditCourse, queriesTodosTypeCourses } from '../../../services';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Icon, InputLabel, MenuItem, Select, Switch } from '@mui/material';
import './index.css';
import { UserContext } from '../../../hook';


export const CourseForm = () => {
  const [course, setCourse] = useState(CourseModel);
  const { setDataContext, dataContext } = useContext(UserContext);
  console.log(dataContext);
  const courseMutation = AddCourse()
  const courseEditMutation=EditCourse()
  const { data } = queriesTodosTypeCourses();
  useEffect(() => {
    if (dataContext?.id > 0) {
    
      setCourse({ ...CourseModel,
        id: dataContext.id,
        type_course_id: dataContext.type_course?.id,
        active: dataContext.active,
        name: dataContext.name,});
    } else {
      setCourse(CourseModel);
    }
   }, [dataContext])
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (course.id > 0) {
      courseEditMutation.mutate({...course})
    }else{
      courseMutation.mutate({ ...course });
    }
    

  }
  return (

    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: 500, maxWidth: '100%' }}>
        <div className='course-form'>
        <FormControl sx={{ m: 0,p:1, minWidth: '50%' }}>
        
          <TextField
            fullWidth
            label="Name"
            id="fullWidth"
            name='name'
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          </FormControl>
          <FormControl sx={{ m: 0,p:1, minWidth: '50%' }}>
                  <InputLabel htmlFor="outlined-adornment-state">Type Course</InputLabel>
                  <Select
                    label="State"
                    id="outlined-adornment-state"
                    name='state_id'
                    value={course.type_course_id}
                    onChange={(e) => setCourse({ ...course, type_course_id: +e.target.value })}
                  >
                    {data?.map((item: any) => (
                      <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
        </div>
        <div className='course-button'>
          <Switch
            checked={course.active}
            onChange={(e) => setCourse({ ...course, active: e.target.checked })}
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
