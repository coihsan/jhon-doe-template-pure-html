import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Blog from './pages/blog.jsx'
import Index from './pages/index-projects.jsx'
import './index.css'
import './index.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
