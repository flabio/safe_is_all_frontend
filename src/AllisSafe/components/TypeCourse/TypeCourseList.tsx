
import Skeleton from 'react-loading-skeleton';
import {  Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { DeleteCourse } from '../../../services';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TypeCourseList = ({ dataCourse }) => {
  const { isLoading, data } = dataCourse;

  const deleteMutation = DeleteCourse()
  const deleteCourseByIdHandler = async (id: number) => {
    deleteMutation.mutate(id)
  };
  const editByIdCourseHandler = (course: any) => {
    console.log(course)
  };

  return (
    <>
      {
        (
          !isLoading ? (
            <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="center">Option</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data?.map((row: any) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="success"
                          startIcon={<EditIcon />}
                          onClick={() => editByIdCourseHandler(row)}>
                          Edit
                        </Button>
                        <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteCourseByIdHandler(row.id)} startIcon={<DeleteIcon />}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <hr/>
          
</>
          )
            : <><Skeleton count={5} />
            </>)
      }

    </>
  )
}


