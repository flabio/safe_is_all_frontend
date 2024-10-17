import  { useEffect, useState } from 'react'
import { CityModel } from '../../model';
import { AddCityData, useEditCityBydId } from '../../../services';


export const CityFrom = ({ editData,setEditData }: any) => {
  const createCityMutatin=AddCityData()
  const mutationEdit=useEditCityBydId()
  const [city, setCity] = useState<any>(CityModel);
  useEffect(() => {
    if (editData.id>0 ) {
      setCity(editData)
    }
  }, [editData])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (city.id >0) {
      mutationEdit.mutate({...city});
    } else {
      createCityMutatin.mutate({ ...city });
      setEditData({})
    }

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
              value={city.name}
              onChange={(e) => setCity({ ...city, name: e.target.value })}
            />
          </div>
        </div>
        <div className="card-footer">
          {
            city.id >0  ? (
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

