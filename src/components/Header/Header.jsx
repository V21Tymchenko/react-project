import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import UserInfo from 'components/UserInfo';
// import { useSelector } from 'react-redux';
// import { stateAuthIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './Header.module.css';

const Header = () => {
  // const isLogined = useSelector(stateAuthIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <Navigation />
      </div>
      {/* {isLogined && <UserInfo />} */}
      {/* <UserInfo /> */}
    </header>
  );
};
export default Header;
