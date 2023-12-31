import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/layout/Blogs";
import Recipes from "../Recipes";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://assignment-10-server-side-kohl.vercel.app/data`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
