import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "../App";
import ChallengePage from "../screen/ChallengePage";
import PDFViewerPage from "../screen/PDFViewerPage";
import NotFound from "../screen/NotFound"; // Import the NotFound component
import ArchivePage from "../screen/ArchivePage"; // Import the ArchivePage component

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteWrapper = ({ Component }) => (
  <>
    <ScrollToTop />
    <Component />
  </>
);

const RootRouteHandler = () => {
  return <App />;
};

const Routes = () => {
  const pageRoutes = [
    {
      path: "/",
      element: <RouteWrapper Component={RootRouteHandler} />,
    },
    {
      path: "/challenge",
      element: <RouteWrapper Component={ChallengePage} />,
    },
    {
      path: "/challenge/:pdfName",
      element: <RouteWrapper Component={PDFViewerPage} />,
    },
    {
      path: "/archive",
      element: <RouteWrapper Component={ArchivePage} />,
    },
    // Add your other routes here

    // Add the 404 route as the last route to catch all unmatched paths
    {
      path: "*",
      element: <RouteWrapper Component={NotFound} />,
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;

// import React, { useEffect } from 'react';
// import { createBrowserRouter, RouterProvider, useLocation, Navigate } from "react-router-dom";
// import HomePage from '../screen/HomePage';
// import ProtectedRoute from './protectedRoute';
// import useAuthStore from '../store/useAuthStore';

// const ScrollToTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
// }

// const RouteWrapper = ({ Component }) => (
//     <>
//         <ScrollToTop />
//         <Component />
//     </>
// );

// const RootRouteHandler = () => {

//     return <HomePage />;
// };

// const Routes = () => {
//     const pageRoutes = [
//         {
//             path: "",
//             element: <RouteWrapper Component={RootRouteHandler} />,
//         },

//     ];

//     const router = createBrowserRouter([
//         ...pageRoutes,
//     ]);

//     return <RouterProvider router={router} />;
// };

// export default Routes;
