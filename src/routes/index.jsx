import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Navigate } from "react-router-dom";
import HomePage from '../screen/HomePage';
import ProtectedRoute from './protectedRoute';
import useAuthStore from '../store/useAuthStore';



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
        },

    ];



    const router = createBrowserRouter([
        ...pageRoutes,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;

