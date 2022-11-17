import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import RightSideBar from 'components/RightSideBar';

import s from './CalculatePage.module.css';

const CalculatorPage = () => {
  return (
    <Container>
      <Header />
      <div className={s.containerFlex}>
        <div>
          <h1 className={s.title}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm />
        </div>
        <div className={s.containerSideBar}>
          {' '}
          <RightSideBar />
        </div>
      </div>
    </Container>
  );
};
export default CalculatorPage;
