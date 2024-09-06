import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Products from "./Components/Products";
import Overview from "./Components/Overview";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/rocking-chair",
        element: <Products />,
      },
    ],
  },
]);

export default Route;
