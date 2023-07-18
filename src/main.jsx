import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wordle from './jsx/Wordle.jsx'
import ErrorPage from './jsx/ErrorPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Wordle/>, errorElement:<ErrorPage/>},
  {path: "*", element: <ErrorPage/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)