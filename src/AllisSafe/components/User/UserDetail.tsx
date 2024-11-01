import React, { useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserContext } from '../../../hook';

export const UserDetail = () => {
  const { dataContext } = useContext(UserContext);
  console.log(dataContext)
  return (
   <>
     
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
             >
              <TableCell > {dataContext.first_name} {dataContext.last_name}</TableCell>
              <TableCell align="left">{dataContext.address}</TableCell>
              <TableCell align="left">{dataContext.phone}</TableCell>
              <TableCell align="left">{dataContext.email}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Rol</TableCell>
            <TableCell align="left">State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
             >
              <TableCell align="left"> {dataContext.rol_name}</TableCell>
              <TableCell align="left">{dataContext.state_name}</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    
   </>
  )
}
