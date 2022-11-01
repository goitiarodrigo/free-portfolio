import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PanelAdmin from '../components/PanelAdmin'

const PrivateRoutes = () => {
  return (
    !window.sessionStorage.getItem('token') ?
        <Navigate to='/signin' />
            :
        <>
            <PanelAdmin />
            <Outlet />
        </>
        
  )
}

export default PrivateRoutes