import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import PanelAdmin from '../components/PanelAdmin'

const PublicRoutes = () => {
    const { param } = useParams()

    return (
        window.sessionStorage.getItem('token') ?
            <Navigate to='/home'/>
                :
            <>
                {
                    !param ?
                        <PanelAdmin />
                    :
                        null
                }
                <Outlet />
            </>
     )
}

export default PublicRoutes