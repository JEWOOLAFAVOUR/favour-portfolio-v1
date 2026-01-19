import { useEffect, ComponentType } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "../App";
import ArchivePage from "../screen/ArchivePage";

interface RouteWrapperProps {
  Component: ComponentType;
}

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteWrapper = ({ Component }: RouteWrapperProps): JSX.Element => (
  <>
    <ScrollToTop />
    <Component />
  </>
);

const RootRouteHandler = (): JSX.Element => {
  return <App />;
};

const Routes = (): JSX.Element => {
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
