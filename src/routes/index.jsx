import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Navigate } from "react-router-dom";
import HomePage from '../screen/Auth/HomePage';
import ProtectedRoute from './protectedRoute';
// import DashboardLayout from '../screen/Dashboard/components/DashboardLayout';
import DashboardLayout from "../screen/Dashboard/components/DashboardLayout";
import Dashboard from '../screen/Dashboard/dashboard/Dashboard';
import useAuthStore from '../store/useAuthStore';
import LoginPage from '../screen/Auth/LoginPage';



const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const RouteWrapper = ({ Component }) => (
    <>
        <ScrollToTop />
        <Component />
    </>
);

const RootRouteHandler = () => {
    const { isAuthenticated, token } = useAuthStore();

    // If user is already authenticated, redirect to dashboard/cbt
    // if (isAuthenticated && token) {
    //     return <Navigate to="/dashboard/cbt" replace />;
    // }

    // Otherwise show the homepage
    return <HomePage />;
};



const Routes = () => {
    const pageRoutes = [
        {
            path: "",
            element: <RouteWrapper Component={RootRouteHandler} />,
        }, {
            path: "/login",
            element: <RouteWrapper Component={LoginPage} />,
        },

    ];

    const dashboardRoutes = [
        {
            path: "dashboard",
            element: <ProtectedRoute />,
            children: [
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Dashboard />,
                        },
                        // Add other dashboard routes here


                    ]
                }
            ],
        },
    ]

    const router = createBrowserRouter([
        ...pageRoutes,
        ...dashboardRoutes,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;

