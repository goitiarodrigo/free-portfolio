import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { UserContext } from "../context/UserContext"

const PanelAdmin = () => {

    const navigation = useNavigate()
    const { userState, signOut } = useContext(UserContext)
    const { fullName, photoProfile, versionTemplate } = userState

    const handleLogOut = () => {
        toast.success(`Te espero pronto, ${fullName}`, {duration: 1300})
        signOut()
        navigation('/signin')
    }

    const activeStyle = {
        textDecoration: "underline",
    }

    return (
        <div>
            <Toaster />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="navLinks">
                            
                                {window.sessionStorage.getItem('token') ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                to ="/home"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/newproject"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >Nuevo proyecto</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/profile"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }    
                                            >Mi perfil</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/myprojects"
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                            >Mis proyectos</NavLink>
                                        </li>
                                        {
                                            !versionTemplate ?
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/newportfolio"
                                                    style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }
                                                >Nuevo portfolio</NavLink>
                                            </li>
                                            :
                                            null
                                        }
                                    </>
                                :

                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/signin">Ingresar</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/signup">Registrarse</NavLink>
                                        </li>
                                    </>
                                }
                            
                            </div>
                            {
                                window.sessionStorage.getItem('token') ?
                                    <div className="profileUser">
                                        <p>{fullName}</p>
                                        <img src={photoProfile} alt="..."/>
                                        <div style={{cursor: 'pointer'}} onClick={handleLogOut}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} fill="gray" viewBox="0 0 512 512"><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
                                        </div>
                                    </div>
                                : null
                            }
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PanelAdmin