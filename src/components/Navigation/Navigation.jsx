import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/diary">Diary</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navigation;
