import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from './layout/Main';
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';
import Login from './components/login/Login';
import LoginForm from './components/login/LoginForm';
import ResetPass from './components/login/ResetPass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "login",
        element: <Login></Login>,
        children: [
          {
            path: "",
            element: <LoginForm></LoginForm>
          },
          {
            path: "resetpassword",
            element: <ResetPass></ResetPass>
          }
        ]
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
