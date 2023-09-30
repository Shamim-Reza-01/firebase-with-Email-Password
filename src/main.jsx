import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Router/Router';
import Home from './Components/Home';
import Login from './Components/Login';
import Resiter from './Components/Resiter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element :<Resiter></Resiter>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
