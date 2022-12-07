import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import PanelAdmin from '../components/PanelAdmin'
import { UserContext } from '../context/UserContext'
import Home from '../pages/Home'

const PrivateRoutes = () => {

  const { pathname } = useLocation()
  const { userState } = useContext(UserContext)
  const { versionTemplate } = userState

  return (
    !window.sessionStorage.getItem('token') ?
        <Navigate to='/signin' />
            :
        <>
            <PanelAdmin />
            {
                pathname === '/newportfolio' && versionTemplate ?
                    <Navigate to='/home' />
                :
                    <Outlet />
            }
        </>
        
  )
}

export default PrivateRoutes