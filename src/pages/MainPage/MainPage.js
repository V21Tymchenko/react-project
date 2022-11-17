import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dailyRateOperation } from 'redux/dailyRate/dailyRate-operations';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();

  const handleSetStorage = dataFromForm => {
    localStorage.setItem('calculateUserInfo', JSON.stringify(dataFromForm));
  };

  const handlesetDataToApi = data => {
    dispatch(dailyRateOperation(data));
  };

  return (
    <>
      <Header />
      <Container>
        <main className={s.backGround}>
          <h1 className={s.title}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm
            handlesetDataToApi={handlesetDataToApi}
            setIsModalOpen={setIsModalOpen}
            handleSetStorage={handleSetStorage}
          />
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        </main>
      </Container>
    </>
  );
};
export default MainPage;
