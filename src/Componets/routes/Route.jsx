import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/layout/Blogs";
import Recipes from "../Recipes";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <Recipes></Recipes>,
        loader: () => fetch(`http://localhost:5000/data`),
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
export default router;
