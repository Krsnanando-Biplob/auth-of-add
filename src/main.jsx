import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import SingUp from './Component/SingUp/SingUp';
import Useprovider from './UseProvider/Useprovider';
import Order from './Component/Order/Order';
import PrivetRoute from './Route/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <PrivetRoute><Home></Home></PrivetRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      },
      {
        path: '/order',
        element: <PrivetRoute><Order></Order></PrivetRoute>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Useprovider>
      <RouterProvider router={router} />
    </Useprovider>
  </StrictMode>,
)
