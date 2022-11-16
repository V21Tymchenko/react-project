import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Container>
        <Header />

        <h1 className={s.title}>Calculate your daily calorie intake right now</h1>
        <DailyCaloriesForm setIsModalOpen={setIsModalOpen}/>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
      </Container>
      <Outlet />
    </>
  );
};
export default MainPage;
