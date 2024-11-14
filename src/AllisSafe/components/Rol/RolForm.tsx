import { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { AddRol, EditRol } from '../../../services';
import { UserContext } from '../../../hook';

const initForm = {
  id: 0,
  name: "",
  active: true
}

export const RolForm = ({ setValue }: any) => {
  const { setDataContext, dataContext } = useContext(UserContext);
  const [roles, setRoles] = useState(initForm);
  const addMutuation = AddRol();
  const editMutuation = EditRol();

  useEffect(() => {
    if (dataContext?.id > 0) {
      setRoles(dataContext);
    } else {
      setRoles(roles);
    }
  }, [dataContext]);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (roles.id > 0) {
      editMutuation.mutate({ ...roles })
    } else {
      addMutuation.mutate({ ...roles })
      setRoles(initForm)
    }
    //setValue(0)
    setDataContext({})
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
            dataContext?.id > 0 ? (
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

