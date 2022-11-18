import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import UserInfo from 'components/UserInfo';
import { useSelector } from 'react-redux';
import { stateAuthToken } from 'redux/auth/auth-selectors';
// import UserInfo from 'components/UserInfo';
// import { useSelector } from 'react-redux';
// import { stateAuthIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './Header.module.css';

const Header = () => {
  const token = useSelector(stateAuthToken);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <Navigation />
      </div>
      {token && <UserInfo />}
    </header>
  );
};
export default Header;
