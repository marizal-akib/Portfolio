import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Layouts/Root";
import Home from "../components/Home/Home";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);
  