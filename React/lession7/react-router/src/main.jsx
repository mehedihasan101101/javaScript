import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/AboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      }
    ]
  },

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
