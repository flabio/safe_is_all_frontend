import  { useEffect, useState } from 'react'
import { createSchool, editSchool } from '../../../services';
import { SchoolModel } from '../../model';



export const FormSchool = ({  schoolData }: any) => {
  const [school, setSchool] = useState<any>(SchoolModel);
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (schoolData.id > 0) {
      setSchool(schoolData)
    }
  }, [schoolData])
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in school){  
        data.append(key, school[key as keyof any]);
    }
     // Agregar el archivo al objeto FormData
     if (file) {
      data.append("file", file);
      console.log(file)
    }
    if (school.id > 0) {
      editSchool(school.id,data)
     // setSchoolData(school)
    } else {
      createSchool(data)
      //setSchool(SchoolModel)

    }

    // setTestData(true)

  }
 
  return (
    <>

      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="card-body">
        <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="inputName">imagen:</label>
                <input type="file"
                name='file'
                  className="form-control"
                  placeholder="Enter name"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name='name'
                  value={school.name}
                  onChange={(e) => setSchool({ ...school, name: e.target.value })}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">Email</label>
                <input type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name='email'
                  value={school.email}
                  onChange={(e) => setSchool({ ...school, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">Phone</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  name='phone'
                  value={school.phone}
                  onChange={(e) => setSchool({ ...school, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">Address</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter address"
                  name='address'
                  value={school.address}
                  onChange={(e) => setSchool({ ...school, address: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">zip code</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter zip code"
                  name='zip_code'
                  value={school.zip_code}
                  onChange={(e) => setSchool({ ...school, zip_code: e.target.value })}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputName">Provider number</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter Provider number"
                  name='provider_number'
                  value={school.provider_number}
                  onChange={(e) => setSchool({ ...school, provider_number: e.target.value })}
                />
              </div>
            </div>
          </div>

        </div>
        <div className="card-footer">
          {
            schoolData?.id !== undefined ? (
              <>
                <button type="submit" className="btn btn-primary">Edit</button>
              </>
            ) : (
              <>
                <button type="submit" className="btn btn-primary">Send</button>
              </>
            )
          }
        </div>
      </form>



    </>
  )
}

