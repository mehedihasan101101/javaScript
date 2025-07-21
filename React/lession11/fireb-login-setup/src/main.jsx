import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Main from './layout/main.jsx';
import Home from './components/home/Home.jsx';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';
import { AuthContext } from './context/authContext.jsx';
import LoginFormm from './components/login/LoginFormm.jsx';
import ForgetPass from './components/login/ForgetPass.jsx';


const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "register",
        element: <Signup></Signup>
      },
      {
        path: "login",
        element: <Login></Login>,
        children: [
          {
            path: "",
            element: <LoginFormm></LoginFormm>
          },
          {
            path: "recovery",
            element: <ForgetPass></ForgetPass>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>



  </StrictMode>,
)
