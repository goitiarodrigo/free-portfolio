import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PanelAdmin from '../components/PanelAdmin'

const PublicRoutes = () => {
    return (
        window.sessionStorage.getItem('token') ?
            <Navigate to='/home'/>
                :
            <>
                <PanelAdmin />
                <Outlet />
            </>
     )
}

export default PublicRoutes