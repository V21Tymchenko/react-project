import Header from 'components/Header';
import { Link } from 'react-router-dom';
import s from './MobilNavPage.module.css';

const MobilNavPage = () => {
  return (
    <>
      <Header />

      <nav className={s.mobilNav}>
        <Link className={s.mobLink} to="/diary">
          Diary
        </Link>
        <Link className={s.mobLink} to="/calculator">
          Calculator
        </Link>
      </nav>
    </>
  );
};
export default MobilNavPage;
