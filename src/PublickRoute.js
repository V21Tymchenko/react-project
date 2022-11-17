import { Navigate, Outlet } from 'react-router-dom';
import { stateAuthIsLoggedIn } from 'redux/auth/auth-selectors';

const PublickRouter = ({ redirectTo = '/' }) => {
  return <>{stateAuthIsLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />}</>;
};
export default PublickRouter;
