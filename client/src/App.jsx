import './App.css'
import Home from './pages/Home/home'
import NotFound from './pages/NotFound';
import Reschedule from './pages/Reschedule/reschedule';
import AddEvent from './pages/AddEvent/addevent';
import Venues from './pages/Venues/venues';
import Login from './pages/Login/login';
import Profile from './pages/ProfileSet/profile';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: '/addevent',
      element: <AddEvent />
    },
    {
      path: '/reschedule',
      element: <Reschedule />,
      errorElement: <NotFound />
    },
    {
      path: '/venues',
      element: <Venues />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
