import { useContext, useEffect, useState } from "react";
import { StateModel } from "../../model";
import Skeleton from "react-loading-skeleton";
import { useAddState, useEditStateBydId } from "../../../services";
import { UserContext } from "../../../hook";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Icon, InputLabel, MenuItem, Select, Switch } from '@mui/material';
import './index.css';

export const StateForm = ({ cityData }: any) => {
  const { dataContext } = useContext(UserContext);

  const [state, setState] = useState(StateModel);
  const { data, isLoading } = cityData
  const createStateMutation = useAddState()
  const udpateStateMutation = useEditStateBydId()
  useEffect(() => {
    if (dataContext?.id > 0) {
      setState(dataContext)
    } else {
      setState(StateModel)
    }
  }, [dataContext]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.id > 0) {
      udpateStateMutation.mutate({ ...state });
    } else {
      createStateMutation.mutate({ ...state });
    }

  }
  return (
    <>
      {
        (
          isLoading !== undefined ? (
            <>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: 500, maxWidth: '100%' }}>
                <div className='row'>
                  <div className='col-5'>
                    <TextField
                      fullWidth
                      label="Name"
                      id="fullWidth"
                      name='name'
                      value={state.name}
                      onChange={(e) => setState({ ...state, name: e.target.value })}
                    />
                  </div>
                  <div className='col-5'>
                  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">City</InputLabel>
  <Select
                      fullWidth
                      id="demo-simple-select-label"
                      label="City"
                      name='city_id'
                      value={state.city_id}
                      onChange={(e) => setState({ ...state, city_id: e.target.value })}
                    >
                      {data?.map((city: any) => (
                        <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>
                      ))}
                    </Select>
</FormControl>
                    
                  </div>
                  <div className='col-2'>
                    <TextField
                      fullWidth
                      label="Zip Code"
                      id="fullWidth"
                      name='zip_ode'
                      value={state.zip_code}
                      onChange={(e) => setState({ ...state, zip_code: e.target.value })}
                    />
                  </div>
                </div>
                <br />
                <div className='course-button'>
                  <Switch
                    checked={state.active}
                    onChange={(e) => setState({ ...state, active: e.target.checked })}
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
            : <><Skeleton count={4} />
            </>)

      }

    </>
  )
}
