import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Login from './assets/LoginAndRegistrtion/Login.jsx';
import AuthProvider from './Contest/ContestApi.jsx';
import Registretion from './assets/LoginAndRegistrtion/Registration.jsx';
import Createvent from './assets/LoginAndRegistrtion/Event/Createvent.jsx';
import PrivateRoute from './Contest/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },{
        path:'regi',
        Component:Registretion
      },
      {
        path:"login",
        Component:Login
      },{
        path:'Creat',
        element:(
          <PrivateRoute>
            <Createvent />
          </PrivateRoute>
        )
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
