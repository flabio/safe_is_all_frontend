import { useEffect, useState } from "react"
import { postLogin } from "../../../services/authService";
import { ILogin } from "../../../interfaces/ILogin";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export const ContactComponent = () => {
    const [form, setForm] = useState(true)
    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState<ILogin>({
        username: '',
        password: ''
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);
    const handlerLogin = (e:any) => {
         e.preventDefault()
        postLogin(login).then((data) => {
           
        });
     
    }
    return (
        <>
            {
                form ?
                    <>
                        {
                            loading ? (
                                <>
                                    <Skeleton height={30} width={280} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={30} width={340} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={30} width={50} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={40} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={30} width={100} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={40} duration={1.5} baseColor="#ddd" highlightColor="#eee" />
                                    <Skeleton height={35} width={80} duration={1.5} baseColor="#ddd" highlightColor="#eee" />

                                </>
                            ) : (<>

                                <h3>Login into All Is Safe!</h3>

                                <p>Nice to see you! Please log in with your account.</p>


                                <hr />
                                <form className="form" onSubmit={handlerLogin}>
                                    <div className="mb-4">


                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="username" value={login.username} onChange={handleChange} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" value={login.password} onChange={handleChange} />
                                    </div>
                                    <div className="col-12 d-grid gap-2">
                                        <button type="submit" className="btn  btn-outline-primary">Sign in</button>
                                    </div>
                                </form>
                                <hr />
                                <p>Don't have an account? <button onClick={() => { setForm(false) }} className="btn btn-link">Signup here</button> </p>
                            </>)

                        }


                    </>
                    : <>

                        <form className="form">
                            <div className="col-12">
                                <div className="col-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" placeholder="Enter your last name" />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" placeholder="Enter your address" />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" placeholder="Enter your phone" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                        <p>Don't have an account? <button onClick={() => { setForm(true) }} className="btn btn-link">Sign in here</button> </p>

                    </>

            }


        </>
    )
}
