import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={s.siteNav}>
      <NavLink className={s.navLink} to="/login">
        Sign in
      </NavLink>
      <NavLink className={s.navLink} to="/register">
        Registration
      </NavLink>
      {/* <NavLink className={s.navLink} to="/calculator">
        Calculator
      </NavLink>
      <NavLink className={s.navLink} to="/diary">
        Diary
      </NavLink> */}
    </nav>
  );
};
export default Navigation;
