
import Skeleton from 'react-loading-skeleton';
import { DeleteCourse } from '../../../services';

export const CourseList = ({dataCourse}:any) => {
  const { isLoading, data } = dataCourse;
  const deleteMutation=DeleteCourse()

  const deleteCourseByIdHandler = async (id: number) => {
    //...
    console.log(id)
    deleteMutation.mutate(id)
    //...
  };
  const editByIdCourseHandler = (course: any) => {
    console.log(course)
    //...
  };
  return (
    <>
 
      {
        (
          isLoading !== undefined ? (
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Course</th>
                  <th>School</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.school_name}</td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => editByIdCourseHandler(item)}>Edit</button>
                      <a className="btn btn-danger btn-sm ml-2" onClick={() => deleteCourseByIdHandler(item.id)}>Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
            : <><Skeleton count={100} />
            </>)
      }

    </>
  )
}


