import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQueryAddModuleRole, useQueryDeleteModuleRole, useQueryModules } from '../../../services';
import { IModuleRole } from '../../../interfaces';
import { UserContext } from '../../../hook';
import { Switch, TableHead } from '@mui/material';

export const ListRolModuleComponent = ({ setValue }: any) => {
    const { dataContext } = useContext(UserContext);
    const { data, isLoading } = useQueryModules();

    const mututionAddModuleRole = useQueryAddModuleRole();
    const deleteMuduleRole = useQueryDeleteModuleRole();

    const handleChange = (row: IModuleRole) => {
        const desiredModuleRoles = data?.data?.flatMap(module => module.module_role || [])
            .filter(role => role.module_id === row.Id && role.role_id === dataContext.id);
        if (desiredModuleRoles?.length > 0) {
            deleteMuduleRole.mutate(desiredModuleRoles[0]?.id);
         
            return
        } else {
            mututionAddModuleRole.mutate({
                role_id: dataContext.id,
                module_id: row.Id,
                id: 0,
                active: true
            });
            return;
        }
    };

    return (
        <>
            <hr />
            <TableContainer component={Paper}>
                {!isLoading ? (
                    <Table sx={{ m: 2, minWidth: 350 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Rol</TableCell>
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
                                    <TableCell component="th" scope='row'>
                                        {dataContext.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.order}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Switch
                                            checked={Boolean(row.module_role.find((item) => item.role_id === dataContext.id))}
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

        </>
    );
};
