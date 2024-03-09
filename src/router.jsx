import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

import Header from './views/Header'

const Login = lazy(() => import('./views/Login'))
const ForgotPassword = lazy(() => import('./views/ForgotPassword'))
const Register = lazy(() => import('./views/Register'))
// const Verify = lazy(() => import('./views/Verify'))

export default function Routes() {
    const routes = useRoutes([
        {
            element: <Header />,
            children: [
                {
                    path: '/login-screen/',
                    element: <Navigate to="/login" replace={true} />,
                },
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'forgot-password',
                    element: <ForgotPassword />,
                },
                {
                    path: 'register',
                    element: <Register />,
                },
                // {
                //     path: 'verify/:act',
                //     element: <Verify />,
                // },
                {
                    path: '*',
                    element: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '12px',
                            }}
                        >
                            404
                        </div>
                    ),
                },
            ],
        },
    ])
    return routes
}
