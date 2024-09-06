import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./MainLayout";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Products from "./Components/Products";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
