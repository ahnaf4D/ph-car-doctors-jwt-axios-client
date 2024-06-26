import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className='loading loading-spinner loading-lg mx-auto container'></span>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;
