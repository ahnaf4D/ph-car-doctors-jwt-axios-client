import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import BookService from '../Pages/BookService/BookService';
import BookingDetails from '../Pages/BookingDetails/BookingDetails';
import PrivateRoute from './PrivateRoute';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/book-services/:id',
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <BookingDetails></BookingDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routers;
