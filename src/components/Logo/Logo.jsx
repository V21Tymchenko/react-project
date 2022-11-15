import { Link } from 'react-router-dom';
import logotype from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logotype} alt="logotype Slim Mom" />
    </Link>
  );
};
export default Logo;
