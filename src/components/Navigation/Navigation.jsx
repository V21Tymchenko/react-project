import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { stateAuthToken } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const token = useSelector(stateAuthToken);
  console.log('token', token);
  return (
    <nav className={s.siteNav}>
      {!token ? (
        <>
          <NavLink className={s.navLink} to="/login">
            Sign in
          </NavLink>
          <NavLink className={s.navLink} to="/register">
            Registration
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className={s.navLink} to="/calculator">
            Calculator
          </NavLink>
          <NavLink className={s.navLink} to="/diary">
            Diary
          </NavLink>
        </>
      )}
    </nav>
  );
};
export default Navigation;
