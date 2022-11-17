import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import RightSideBar from 'components/RightSideBar';
import { useState } from 'react';

import s from './CalculatePage.module.css';

const CalculatorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleSubmit = value => {};
  return (
    <Container>
      <Header />
      <div className={s.containerFlex}>
        <div>
          <h1 className={s.title}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm onSubmit={handleSubmit} />
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        </div>
        <div className={s.containerSideBar}>
          <RightSideBar />
        </div>
      </div>
    </Container>
  );
};
export default CalculatorPage;
