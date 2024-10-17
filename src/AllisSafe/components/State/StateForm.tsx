import { useContext, useEffect, useState } from "react";
import { StateModel } from "../../model";
import Skeleton from "react-loading-skeleton";
import { useAddState, useEditStateBydId } from "../../../services";
import { UserContext } from "../../../hook";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Icon, Switch } from '@mui/material';
import './index.css';

export const StateForm = ({ cityData }: any) => {
  const {dataContext} = useContext(UserContext);

  const [state, setState] = useState(StateModel);
  const { data, isLoading } = cityData
  const createStateMutation = useAddState()
  const udpateStateMutation=useEditStateBydId()
  useEffect(()=>{
    if(dataContext?.id>0){
      setState(dataContext)
    }else{
      setState(StateModel)
    }
  },[dataContext]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.id > 0) {
      udpateStateMutation.mutate({...state });
    } else {
      createStateMutation.mutate({...state });
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
       <div className='col-6'>
        <TextField
          fullWidth
          label="Name"
          id="fullWidth"
          name='name'
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        </div>
        <div className='col-6'>
      <TextField
          fullWidth
          label="Time"
          id="fullWidth"
          name='zip_ode'
          value={state.zip_code}
          onChange={(e) => setState({ ...state, zip_code: e.target.value })}
        />
     </div>
            </div>
            <br/>
        <div className='course-button'>
        <Switch
             checked={state.active}
              onChange={(e)=> setState({...state,active: e.target.checked})}
              inputProps={{ 'aria-label': 'controlled' }}
              name='active'
            /> 
          <Button variant="contained" type='submit'>
            <Icon>save</Icon> Save
          </Button>
      </div>
      </Box>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Enter name"
                        name='name'
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">Zip Code</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Enter zip code"
                        name='zip_code'
                        value={state.name}
                        onChange={(e) => setState({ ...state, zip_code: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">City</label>
                      <select className="form-control" name="cityid" onChange={(e) => setState({ ...state, city_id: parseInt(e.target.value) })}>

                        <option value="">Select</option>
                        {data?.map((city: any) => (
                          <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Send</button>

              </div>
            </form>
            </>
          )
            : <><Skeleton count={4} />
            </>)

      }

    </>
  )
}
