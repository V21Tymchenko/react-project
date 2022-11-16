import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <Container>
        <Header />

        <h1 className={s.title}>
          Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm />
      </Container>
      <Outlet />
    </>
  );
};
export default MainPage;
