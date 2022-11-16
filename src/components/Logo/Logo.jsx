import { Link } from 'react-router-dom';
import logotype from '../../assets/images/logo.png';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/">
      <img className={s.logoImage} src={logotype} alt="logotype Slim Mom" />
    </Link>
  );
};
export default Logo;
