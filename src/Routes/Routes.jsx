import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Layouts/Root";
import Home from "../components/Home/Home";
import { TbBuildingWarehouse } from "react-icons/tb";
import Blogs from "../components/Blogs/Blogs";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        }
      ]
    },
  ]);