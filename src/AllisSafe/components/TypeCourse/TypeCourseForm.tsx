import { SyntheticEvent, useState } from 'react'
import { TypeCourseModel } from '../../model/CourseModel';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Icon, Switch } from '@mui/material';
import './index.css';
import { AddTypeCourse } from '../../../services';


export const TypeCourseForm = () => {
  const [typeCourse, setTypeCourse] = useState(TypeCourseModel);
  const courseMutation = AddTypeCourse()
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    courseMutation.mutate({ ...typeCourse });
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
            value={typeCourse.name}
            onChange={(e) => setTypeCourse({ ...typeCourse, name: e.target.value })}
          />

        </div>
        <div className='course-button'>
          <Switch
            checked={typeCourse.active}
            onChange={(e) => setTypeCourse({ ...typeCourse, active: e.target.checked })}
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
