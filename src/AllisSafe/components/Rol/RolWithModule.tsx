import { Checkbox, DialogTitle, IconButton, Switch, TableHead, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Skeleton from 'react-loading-skeleton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState } from 'react';
import { useQueryAddModuleRole, useQueryDeleteModuleRole, useQueryModules } from '../../../services';
import { IModuleRole } from '../../../interfaces';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const RolWithModule = ({ rol, open, setOpen }: any) => {
  const { data, isLoading } = useQueryModules();
  const mututionAddModuleRole = useQueryAddModuleRole();
  const deleteMuduleRole = useQueryDeleteModuleRole();

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');

  const handleClose = () => {
    setFullWidth(true);
    setMaxWidth('md');
    setOpen(false);
  };

  const handleChange = (row: any) => {
    const desiredModuleRoles = data?.data?.flatMap(module => module.module_role || [])
      .filter(role => role.module_id === row.Id && role.rol_id === rol.id && role.rol_id === 11);
    if (desiredModuleRoles?.length > 0) {
      deleteMuduleRole.mutate(desiredModuleRoles[0]?.id);
      return
    } else {
      mututionAddModuleRole.mutate({
        role_id: rol.id,
        module_id: row.Id,
        id: 0,
        active: true
      });
      return;
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ m: 2, p: 1 }} id="customized-dialog-title">
          {rol.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <hr />
        <TableContainer component={Paper}>
          {!isLoading ? (
            <Table sx={{ m: 2, minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Order</TableCell>
                  <TableCell align="left">Check</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((row: any) => (
                  <TableRow key={row.Id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.order}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Switch
                        checked={Boolean(row.module_role.find((item) => item.rol_id === rol.id))}
                        onChange={() => handleChange(row)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        name='active'
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Skeleton count={5} />
          )}
        </TableContainer>
      </BootstrapDialog>
    </>
  );
};
