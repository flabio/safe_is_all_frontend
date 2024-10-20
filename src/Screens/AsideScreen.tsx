
import { NavComponent } from '../components/nav/NavComponent'

export const AsideScreen = () => {

    return (
        <>
            <aside className="main-sidebar sidebar-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src="/img/ogo.png" alt="AdminLTE Logo" className="brand-image " />
                    <span className="brand-text font-weight-light" >.</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/img/ogo.png" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <NavComponent />
                </div>
            </aside>
        </>
    )

}


