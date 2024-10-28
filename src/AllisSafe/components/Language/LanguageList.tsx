

import Skeleton from 'react-loading-skeleton';
import {  ILanguage,  } from '../../../interfaces';
import { useContext } from 'react';
import { UserContext } from '../../../hook';
import { Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryDeleteLanguage } from '../../../services';
export const LanguageList = ({currentPage,setCurrentPage,useQueryTodosLanguages,setValue}:any) => {
  //const [currentPage, setCurrentPage] = useState(1);
 // const {data:languajeDatas,isLoading}:any=useQueryLanguages(currentPage);
 //const [currentPage, setCurrentPage] = useState(1);
 const { setDataContext } = useContext(UserContext);
 const {data:languajeDatas,isLoading}=useQueryTodosLanguages;
 const useQueryDeleteMutation = useQueryDeleteLanguage()

  const onPrevious = (page: number) => {
    setCurrentPage(page - 1)
  };
  const onNext = (page: number) => {
    if (languajeDatas.length < 5) {
      setCurrentPage(page)
    } else {
      setCurrentPage(page + 1)
    }
  }
  const editByIdUserHandler=(row:ILanguage)=>{
    setDataContext(row)
    setValue(1)
  }
  const deleteUserByIdHandler=(id:number)=>{
    useQueryDeleteMutation.mutate(id)
  }
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
                  <TableCell align="left">#</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Active</TableCell>
                    <TableCell align="center">Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {languajeDatas?.map((row: any) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       <TableCell align="left">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.active ? "active" : "inactive"}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          className="btn btn-success btn-sm ml-1"
                          color="success"
                          startIcon={<EditIcon />}
                          onClick={() => editByIdUserHandler(row)}>
                          Edit
                        </Button>
                        <Button className="btn btn-danger ml-1" color="error" onClick={() => deleteUserByIdHandler(row.id)} startIcon={<DeleteIcon />}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
           
              <hr />
              <div className='d-flex justify-content-between'>
                <span>
                  total records: <b>{languajeDatas?.totalCount || 0}</b>
                </span>
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onPrevious(currentPage)} disabled={currentPage === 1 ? true : false}>Previous</button>
                    </li>
                    <li className={`page-item `}>
                      <button type="button" className="page-link" onClick={() => onNext(currentPage)} disabled={languajeDatas?.data?.length === undefined || languajeDatas?.data?.length < 5 ? true : false}>Next</button>
                    </li>
                  </ul>
                </nav>
                <span>
                  current page: <b>{languajeDatas?.data?.length|| 0} </b>
                </span>
              </div>

            </>
          )
            : <><Skeleton count={5} />
            </>)
      }

    </>

  )
}
