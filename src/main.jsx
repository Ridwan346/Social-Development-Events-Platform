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
import Upcoming from './assets/LoginAndRegistrtion/Event/Upcoming.jsx';
import EventDetail from './assets/LoginAndRegistrtion/Event/EventDetail.jsx';
import JointEvent from './assets/LoginAndRegistrtion/Event/JointEvent.jsx';
import JoingList from './assets/LoginAndRegistrtion/Event/JoingList.jsx';
import ManageEvents from './assets/LoginAndRegistrtion/Event/ManageEvent.jsx';
import UpdateEvent from './assets/LoginAndRegistrtion/Event/UpdateEvent.jsx';

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
      },{
        path:"upcoming",
        Component:Upcoming
      },{
        path:"eventDetai/:id",
        loader:({ params })=>fetch(`http://localhost:5000/events/${params.id}`),
        Component:EventDetail 
      },{
        path:'jonitEvent/:id',
        element:(
          <PrivateRoute>
            <JointEvent></JointEvent>
          </PrivateRoute>
        )
      }
      ,{
        path:'jonitingList',
        element:(
          <PrivateRoute>
            <JoingList></JoingList>
          </PrivateRoute>
        )
      },{
        path:'Manageevent',
        Component:ManageEvents
      },{
        path:"Update/:id",
        Component:UpdateEvent
      }
    ]}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
