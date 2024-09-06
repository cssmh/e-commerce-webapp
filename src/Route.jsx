import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./MainLayout";
import SignUp from "./Components/SignUp";
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
    ],
  },
]);

export default Route;
