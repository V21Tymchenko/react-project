import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/diary">Diary</NavLink>
    </nav>
  );
};
export default Navigation;
