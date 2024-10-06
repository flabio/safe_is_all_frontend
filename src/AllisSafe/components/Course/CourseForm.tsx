import { useState } from 'react'
import { CourseModel } from '../../model/CourseModel';
import Skeleton from 'react-loading-skeleton';
import { AddCourse } from '../../../services';

export const CourseForm = ({dataSchool}:any) => {
  const [course, setCourse] = useState(CourseModel);
  const courseMutation=AddCourse()
  const {data,isLoading}=dataSchool;

const handleSubmit=(e:any) => {
  e.preventDefault();
  courseMutation.mutate({...course});
  //...
}
  return (
  
     <>
      {
        (
          isLoading !== undefined ? (
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
                        value={course.name}
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="inputName">Course</label>
                      <select className="form-control" name="school_id" onChange={(e) => setCourse({ ...course, school_id: parseInt(e.target.value) })}>

                        <option value="">Select</option>
                        {data?.map((course: any) => (
                          <option key={course.id} value={course.id}>{course.name}</option>
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
          )
            : <><Skeleton count={100} />
            </>)

      }

    </>
  )
}
