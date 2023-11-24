import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Me from './Pages/Me';
import Contact from './Pages/Contact';
import Work from './Pages/Work';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Me",
        element:<Me/>
      },
      {
        path:"/Con",
        element:<Contact/>
      },
      {
        path:"/Wor",
        element:<Work/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
