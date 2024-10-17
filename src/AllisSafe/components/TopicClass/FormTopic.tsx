import { useState } from 'react'

import {  AddTopic } from '../../../services';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Icon, Switch } from '@mui/material';

import { TopicModel } from '../../model';


export const FormTopic = ({coursoid}:any) => {
  const [topic, setTopic] = useState(TopicModel);
  const topicMutation = AddTopic()


  const handleSubmit = (e: any) => {
    e.preventDefault();
    topic.course_id=coursoid;
    topicMutation.mutate({ ...topic });
    //...
  }
  return (

    <>
      <Box
   component="form"
        onSubmit={handleSubmit}
        sx={{ width: 500, maxWidth: '100%' }}>
       <div className='row'>
       <div className='col-6'>
        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          name='title'
          value={topic.title}
          onChange={(e) => setTopic({ ...topic, title: e.target.value })}
        />
        </div>
        <div className='col-6'>
      <TextField
          fullWidth
          label="Time"
          id="fullWidth"
          name='time_hours'
          type='number'
          value={topic.time_hours}
          onChange={(e) => setTopic({ ...topic, time_hours: e.target.value })}
        />
     </div>
            </div>
            <br/>
        <div className='course-button'>
        <Switch
             checked={topic.active}
              onChange={(e)=> setTopic({...topic,active: e.target.checked})}
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
