import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "../App";
import ArchivePage from "../screen/ArchivePage";

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
      path: "/archive",
      element: <RouteWrapper Component={ArchivePage} />,
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
