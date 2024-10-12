import { useState } from 'react'
import { CourseModel } from '../../model/CourseModel';
import Skeleton from 'react-loading-skeleton';
import { AddCourse } from '../../../services';

export const CourseForm = () => {
  const [course, setCourse] = useState(CourseModel);
  const courseMutation=AddCourse()


const handleSubmit=(e:any) => {
  e.preventDefault();
  courseMutation.mutate({...course});
  //...
}
  return (
  
     <>
      
    
         
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
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
             
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Send</button>

              </div>
            </form>
          
          

      

    </>
  )
}
