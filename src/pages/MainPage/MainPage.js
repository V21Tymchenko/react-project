import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dailyRate = useSelector(state => state.dailyRate.dailyRate)

  return (
    <Container>
      <Header />
      <main className={s.backGround}>
        <h1 className={s.title}>
          Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm setIsModalOpen={setIsModalOpen} />
        {isModalOpen && dailyRate && <Modal setIsModalOpen={setIsModalOpen}/>}
      </main>
    </Container>
  );
};
export default MainPage;
