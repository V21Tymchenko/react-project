import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import UserInfo from 'components/UserInfo';
import { useSelector } from 'react-redux';
import { stateAuthToken } from 'redux/auth/auth-selectors';
import s from './Header.module.css';
import { useMediaQuery } from 'react-responsive';
// import PropTypes from 'prop-types';

import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';
import { Link } from 'react-router-dom';

const Header = ({setIsModalOpen}) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesctop = useMediaQuery({ query: '(min-width: 1280px)' });
  const token = useSelector(stateAuthToken);
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <Logo />
          {!token && !isDesctop && <Navigation />}
        </div>
        {token && isTablet && <UserInfo />}
        {token && (
          <Link className={s.burger} to="/mobilnav">
            <BurgerBtn />
          </Link>
        )}
      </header>
      {isMobile && (
        <div className={s.mobilUser}>
          <UserInfo />
        </div>
      )}
    </>
  );
};
export default Header;

// Header.propTypes = {
//   setIsModalOpen.PropTypes.func,
// }