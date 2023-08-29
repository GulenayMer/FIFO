import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // You need to access the browser jwt cookie and check if it is valid and has a user
  // if it has a user, then you can render the outlet

  const { user, loading } = useContext(AuthContext); // this will not be enough
  return <>{!loading && <>{user ? <Outlet /> : <Navigate to="/" />}</>}</>;
};

export default ProtectedRoute;
