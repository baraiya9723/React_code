import React from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
