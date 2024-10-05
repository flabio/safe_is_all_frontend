
import React, { useState } from 'react'

import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Switch, TextField } from '@mui/material';
import Icon from '@mui/material/Icon';
import { UserModel } from '../../model/';
import { AddUser, queriesTodosRol, useStates } from '../../../services';
import { Visibility, VisibilityOff } from '@mui/icons-material';



export const StudentForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(UserModel);
  const useMutationAddUser=AddUser();
  const { data: rols } = queriesTodosRol();
  const { data: states } = useStates();
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
  
    useMutationAddUser.mutate({...user});
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ '& .MuiTextField-root': { m: 1, p: 1, width: '45ch' } }}
          noValidate
          autoComplete="off"

        >
          <div>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-first-name">First Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-first-name"
                type={'text'}
                label="First Name"
                name='first_name'
                value={user.first_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-first-name">Second Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-second-name"
                type={'text'}
                label="Second Name"
                name='second_name'
                placeholder='Enter Second Name'
              />
            </FormControl>
      

          </div>
          <div>
          <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-first-sur-name">First Sur Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-first-sur-name"
                type={'text'}
                label="1. Last Name"
            
                name='first_sur_name'
                value={user.first_sur_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-second-sur-name">Second Sur Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-second-sur-name"
                type={'text'}
                label="2. Last Name"
                name='second_sur_name'
              value={user.second_sur_name}
              onChange={handleChange}
              />
            </FormControl>
  

          </div>
          <div>
          <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-address">Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-address"
                type={'text'}
                  name='address'
                value={user.address}
                onChange={handleChange}
              />
            </FormControl>
  
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-phone">Phone</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone"
                type={'text'}
                name='phone'
                value={user.phone}
                onChange={handleChange}
              />
            </FormControl>
 
          </div>
          <div>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={'text'}
                name='email'
                placeholder='Enter Email'
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-zip-code">Zip Code</InputLabel>
              <OutlinedInput
                id="outlined-adornment-zip-code"
                type={'text'}
                name='zip_code'
                placeholder='Enter Zip Code'
                value={user.zip_code}
                onChange={handleChange}
              />
            </FormControl>

          </div>

          <div>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel  htmlFor="outlined-adornment-rol">Rol</InputLabel>
              <Select
                label="Rol"
                id="outlined-adornment-rol"
                name='rol_id'
                value={user.rol_id}
                onChange={handleChange}
              >
                {rols?.data?.map((rol: any) => (
                  <MenuItem key={rol.id} value={rol.id}>{rol.name}</MenuItem>
                ))}
              </Select>
            </FormControl>


            <FormControl sx={{ m: 2, minWidth: 390 }}>
              <InputLabel htmlFor="outlined-adornment-state">State</InputLabel>
              <Select
                label="State"
                id="outlined-adornment-state"
                name='state_id'
                value={user.state_id}
                onChange={handleChange}
              >
                {states?.map((state: any) => (
                  <MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

          </div>
          <div>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name='password'
                value={user.password}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 2, minWidth: 390 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name='password_confirmation'
                value={user.password_confirmation}
                onChange={handleChange}
              />
            </FormControl>
            <Switch
              checked={user.active}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              name='active'
            />
          </div>



          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" type='submit'>
              <Icon>save</Icon> Save
            </Button>

          </div>
        </Box>
      </div>

    </>
  )
}
