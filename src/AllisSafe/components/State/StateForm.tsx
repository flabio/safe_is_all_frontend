import { useContext, useEffect, useState } from "react";
import { StateModel } from "../../model";
import Skeleton from "react-loading-skeleton";
import { useAddState, useEditStateBydId } from "../../../services";
import { UserContext } from "../../../hook";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Button, Icon, Switch } from '@mui/material';
import './index.css';

export const StateForm = ({ cityData,setValue}: any) => {
  const { setDataContext,dataContext } = useContext(UserContext);

  const [state, setState] = useState(StateModel);
  const { data, isLoading } = cityData;
  const createStateMutation = useAddState();
  const udpateStateMutation = useEditStateBydId();

  useEffect(() => {
    if (dataContext?.id > 0) {
      setState(dataContext);
    } else {
      setState(StateModel);
    }
  }, [dataContext]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.id > 0) {
      udpateStateMutation.mutate({ ...state });
    } else {
     
      createStateMutation.mutate({ ...state });
    }
    setValue(0)
    setDataContext({});
  };

  return (
    <>
      {isLoading !== undefined ? (
        <>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: 500, maxWidth: '100%' }}
          >
            <div className="row">
              <div className="col-5">
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  name="name"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
              </div>
              <div className="col-4">
                <Autocomplete
                  id="city-select-autocomplete"
                  sx={{ width: 300 }}
                  options={data || []}
                  autoHighlight
                  getOptionLabel={(option) => option.name || ''}
                  value={data?.find((city) => city.id === state.city_id) || null}
                  onChange={(event, newValue) => {
                    setState({ ...state, city_id: newValue ? newValue.id : null });
                  }}
                  renderOption={(props, option) => (
                    <div key={option.id}>
                      <Box
                        component="li" {...props}>
                        {option.name}
                      </Box>
                    </div>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a City"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // Desactiva el autocompletado
                      }}
                    />
                  )}
                />
              </div>
              <div className="col-3">
                <TextField
                  fullWidth
                  label="Zip Code"
                  id="zip_code"
                  name="zip_code"
                  value={state.zip_code}
                  onChange={(e) => setState({ ...state, zip_code: e.target.value })}
                />
              </div>
            </div>
            <br />
            <div className="course-button">
              <Switch
                checked={state.active}
                onChange={(e) => setState({ ...state, active: e.target.checked })}
                inputProps={{ 'aria-label': 'controlled' }}
                name="active"
              />
              <Button variant="contained" type="submit">
                <Icon>save</Icon> Save
              </Button>
            </div>
          </Box>
        </>
      ) : (
        <>
          <Skeleton count={4} />
        </>
      )}
    </>
  );
};
