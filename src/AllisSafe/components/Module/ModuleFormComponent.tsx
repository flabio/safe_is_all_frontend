import { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../hook';
import { useQueryAddModule, useQueryEditModule } from '../../../services';
import { ModuleModel } from '../../model';

export const ModuleFormComponent = ({ setValue }) => {
    const { setDataContext, dataContext }: any = useContext(UserContext);
    const [modules, setModules] = useState(ModuleModel);
    const addMutuation = useQueryAddModule();
    const editMutuation = useQueryEditModule();

    useEffect(() => {
        if (dataContext?.id > 0) {
            setModules(dataContext);
        } else {
            setModules(modules);
        }
    }, [dataContext]);
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (modules.id > 0) {
            editMutuation.mutate({ ...modules })
        } else {
            addMutuation.mutate({ ...modules })
            setModules(ModuleModel)
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
                            value={modules.name}
                            onChange={(e) => setModules({ ...modules, name: e.target.value })}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="inputName">Order</label>
                        <input type="number"
                            className="form-control"
                            placeholder="Enter order number"
                            name='order'
                            value={modules.order}
                            onChange={(e) => setModules({ ...modules, order: +e.target.value })}
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

