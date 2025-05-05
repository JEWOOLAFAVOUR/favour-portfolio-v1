import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import useAuthStore from '../store/useAuthStore'

export default function ProtectedRoute() {
    const navigate = useNavigate()
    const { isAuthenticated, token } = useAuthStore()


    // useEffect(() => {
    //     if (!isAuthenticated || !token) {
    //         navigate('/login', { replace: true })
    //     }
    // }, [isAuthenticated, token, navigate])

    // useEffect(() => {
    //     const handlePopState = (event) => {
    //         // If the user tries to go back from the dashboard, prevent it and stay on the dashboard
    //         if (event.state && event.state.dashboard) {
    //             navigate('/dashboard', { replace: true })
    //         }
    //     }

    //     window.history.pushState({ dashboard: true }, '')
    //     window.addEventListener('popstate', handlePopState)

    //     return () => {
    //         window.removeEventListener('popstate', handlePopState)
    //     }
    // }, [navigate])

    // if (!isAuthenticated || !token) {
    //     return <Navigate to="/login" replace />
    // }

    return <Outlet />
}

