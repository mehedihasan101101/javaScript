import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Users from './components/Users';
import User from './components/User';
import Posts from './components/posts';
import Post from './components/post';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/AboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:userid',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <User></User>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:postId',
        loader: (({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)),
        element: <Post></Post>
      }
    ]
  },

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
