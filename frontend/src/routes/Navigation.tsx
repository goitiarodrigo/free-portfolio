import React, { Suspense } from 'react'
import { LinkedInCallback } from 'react-linkedin-login-oauth2'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { routes } from './routes'

const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <Suspense fallback={<h1>Loading</h1>}>
                <>
                    <Routes>
                        <Route path='/' element={<PrivateRoutes />}>
                            {
                                routes.map(route => 
                                    route.private && (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={<route.Component />}
                                        />
                                    
                                    )
                                )
                            }
                            <Route path="/linkedin/auth" element={<LinkedInCallback />} />
                            <Route path="/*" element={<Navigate to="/home" replace />} />
                        </Route>
                        <Route path="/" element={<PublicRoutes />}>
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/linkedin/auth" element={<LinkedInCallback />} />
                        </Route>
                    </Routes>
                </>
            </Suspense>
        </BrowserRouter>
    </>
  )
}

export default Navigation