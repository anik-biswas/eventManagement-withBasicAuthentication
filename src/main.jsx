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
import Login from './component/login/Login';
import Registration from './component/login/Registration';
import AuthProvider from './firebase/AuthProvider';
import PribateRoute from './component/PribateRoute';
import Gallery from './component/gallery/Gallery';

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
        element: <PribateRoute><EventDetails></EventDetails></PribateRoute>,
        loader : () => fetch('/../events.json'),
      },
      {
        path: "/gallery",
        element: <PribateRoute><Gallery></Gallery></PribateRoute>,
        loader : () => fetch('/../events.json'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
