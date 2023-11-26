import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Blog from './pages/blog.jsx'
import Index from './pages/index-projects.jsx'
import './index.css'
import './index.js'

import ErrorPage from './error-page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/jhon-doe-template-pure-html/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Index",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
