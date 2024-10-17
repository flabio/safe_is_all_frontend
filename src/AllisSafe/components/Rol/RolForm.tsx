import  { useEffect, useState } from 'react'
import { createNew, editRol, queryRoles } from '../../../services/rolService';

const initForm = {
  id: 0,
  name: "",
  active: true
}

export const RolForm = ({ setTestData, rolGData,setRolGData }: any) => {
  const [roles, setRoles] = useState<any>(initForm);
  useEffect(() => {
    if (rolGData.id>0 ) {
      setRoles(rolGData)
    }
  }, [rolGData])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (roles.id >0) {
      editRol(roles)
      setRolGData(roles)
    } else {
      createNew(roles)
      setRoles(initForm)
     // setRolGData(initForm)

    }

    setTestData(true)

    await queryRoles()
  }
  return (
    <>

      <form onSubmit={handleSubmit}>

        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input type="text"
              className="form-control"
              placeholder="Enter name"
              name='name'
              value={roles.name}
              onChange={(e) => setRoles({ ...roles, name: e.target.value })}
            />
          </div>
        </div>

        <div className="card-footer">
          {
            rolGData !== undefined ? (
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

