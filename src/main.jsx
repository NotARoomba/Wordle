import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wordle from './jsx/Wordle.jsx'
import Error from './jsx/Error.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Wordle/>, errorElement:<Error/>},
  {path: "*", element: <Error/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)