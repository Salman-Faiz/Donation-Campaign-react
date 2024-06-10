import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics.jsx';
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx';
import Root from './Components/Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
    element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path :"/donationDetails/:id",
        element : <DonationDetails />,
        loader: ({}) => fetch('../public/build.json'),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
