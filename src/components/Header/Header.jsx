import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import UserInfo from 'components/UserInfo';
// import { useSelector } from 'react-redux';
import s from './Header.module.css';

const Header = () => {
  // const isLogined = useSelector(state => state.auth.isLoggedIn);
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
      {/* {isLogined && <UserInfo />} */}
      <UserInfo />
    </header>
  );
};
export default Header;
