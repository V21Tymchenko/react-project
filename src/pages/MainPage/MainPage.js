import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useState } from 'react';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Container>
      <Header />
      <main className={s.backGround}>
        <h1 className={s.title}>
          Calculate your daily calorie intake right now
        </h1>
        <DailyCaloriesForm setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </main>
    </Container>
  );
};
export default MainPage;
