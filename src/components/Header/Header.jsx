import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;
