import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Skeleton from 'react-loading-skeleton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableBodyCommon = ({ dataTopic }: any) => {
  const { isLoading, data } = dataTopic;
  return (
    <>

      {
        !isLoading ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Time hours</TableCell>
                  <TableCell align="left">IsActive</TableCell>
                  <TableCell align="center">Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      {row.title}
                    </TableCell>
                    <TableCell align="left">
                      {row.time_hours} - hours
                    </TableCell>
                    <TableCell align="left">
                      {row.active ? "yes" : "no"}
                    </TableCell>
                    <TableCell align='center'>
                      <Button
                        className="btn btn-success btn-sm ml-1"
                        color="success"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn btn-danger ml-1"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : <><Skeleton count={5} />
        </>
      }

    </>
  )
}
