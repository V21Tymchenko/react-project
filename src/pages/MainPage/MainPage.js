import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <main className={s.backGround}>
        <h1 className={s.title}>
          Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm />
      </main>
    </Container>
  );
};
export default MainPage;
