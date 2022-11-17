import { Navigate, Outlet } from 'react-router-dom';
import { stateAuthIsLoggedIn } from 'redux/auth/auth-selectors';

const RrivetRoute = () => { return <>{stateAuthIsLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default RrivetRoute;