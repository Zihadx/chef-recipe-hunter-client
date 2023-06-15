import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/Home";
import Blogs from "../../pages/layout/Blogs";
import Recipes from "../Recipes";

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
    ],
  },
]);
export default router;
