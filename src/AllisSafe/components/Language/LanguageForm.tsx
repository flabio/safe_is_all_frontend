import { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../../hook';
import { LanguajeModel } from '../../model/LanguageModel';
import { useQueryAddLanguage, useQueryEditLanguage } from '../../../services';

export const LanguageForm = ({ setValue }: any) => {
    const { setDataContext, dataContext } = useContext(UserContext);
    const [lan, setLan] = useState(LanguajeModel);
    const lanAddMutation = useQueryAddLanguage()
    const lanEditMutation = useQueryEditLanguage()
    useEffect(() => {
        if (dataContext?.id > 0) {
            setLan(dataContext);
        } else {
            setLan(LanguajeModel);
        }
    }, [dataContext]);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (dataContext?.id > 0) {
            lanEditMutation.mutate({ ...lan })
        } else {
            lanAddMutation.mutate({ ...lan })
        }
        setDataContext({})
        setValue(0)

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
                            value={lan.name}
                            onChange={(e) => setLan({ ...lan, name: e.target.value })}
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

