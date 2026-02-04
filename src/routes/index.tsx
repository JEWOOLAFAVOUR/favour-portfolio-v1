import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: <App />,
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
