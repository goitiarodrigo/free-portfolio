import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const PanelAdmin = () => {

    const { userState } = useContext(UserContext)
    const { token, fullName, photoProfile } = userState

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="navLinks">
                                <li className="nav-item">
                                    <NavLink to = "/">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/newproject">Nuevo proyecto</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/myprofile">Mi perfil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/myprojects">Mis proyectos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/newportfolio">Nuevo portfolio</NavLink>
                                </li>
                                {!token &&
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/signin">Ingresar</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/signup">Registrarse</NavLink>
                                    </li>
                                </>}
                            </div>
                            <div className="profileUser">
                                <p>{fullName}</p>
                                <img src={photoProfile} alt="..."/>
                                
                            </div>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PanelAdmin