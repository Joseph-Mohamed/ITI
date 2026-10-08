import { NavLink, Outlet } from "react-router-dom";
function Gallary() {


    return (
        <>    <div className="container-fluid text-2xl bg-primary p-4 mt-3 text-center text-light">
            <h2>Gallery</h2>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>Gallery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`rooms`}>Rooms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`restorants`}>Restorants</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

            <Outlet />
            
        </>
    );
}

export default Gallary