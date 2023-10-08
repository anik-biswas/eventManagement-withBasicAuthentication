import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Root from './component/Root.jsx';
import Home from './component/home/Home';
import ErrorPage from './component/errorpage/ErrorPage';
import EventDetails from './component/eventDetails/EventDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <ErrorPage></ErrorPage> ,
    children : [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/event/:id",
        element: <EventDetails></EventDetails>,
        loader : () => fetch('/../events.json'),
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
