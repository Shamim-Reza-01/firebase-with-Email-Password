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
import CustomeLogin from './Components/CustomeLogin';

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
        path : "/register", //register ar kaj login a kora hoye geche thai ai ta kora hoyeche
        element : <Login></Login>
      },
      {
        path : "/login", // ar thai akhaneo register ar jaigai login ar kaj kora hoyeche.
        element :<Resiter></Resiter>
      },
      {
        path :'/customlogin',
        element :<CustomeLogin></CustomeLogin>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
