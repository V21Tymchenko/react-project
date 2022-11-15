import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>Calculate your daily calorie intake right now</h1>
        <DailyCaloriesForm />
      </Container>
      <Outlet />
    </>
  );
};
export default MainPage;
