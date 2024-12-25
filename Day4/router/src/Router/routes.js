import React from 'react';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Layout from '../Layout.js'
import Login from '../Components/Login/login.js';

// const routes = [
//   { path: '/', element: <Home /> },
//   { path: '/about', element: <About /> },
//   { path: '/contact', element: <Contact /> },
// ];

const routes =[
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
]


export default routes;
