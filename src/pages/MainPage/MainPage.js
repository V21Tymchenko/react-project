import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRateOperation } from 'redux/dailyRate/dailyRate-operations';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // const handleSetStorage = dataFromForm => {
  //   localStorage.setItem('calculateUserInfo', JSON.stringify(dataFromForm));
  // };

  const handlesetDataToApi = data => {
    dispatch(dailyRateOperation(data));
  };
  const kcal = useSelector(state => state?.dailyRate?.dailyRate);
  const arrNotAllowedProducts = useSelector(state =>
    state?.dailyRate?.notAllowedProducts.slice(0, 5)
  );

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen}/>
      <Container>
        <main className={s.backGround}>
          <h1 className={s.title}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm
            handlesetDataToApi={handlesetDataToApi}
            setIsModalOpen={setIsModalOpen}
            // handleSetStorage={handleSetStorage}
          />
          {arrNotAllowedProducts && isModalOpen && (
            <Modal
              setIsModalOpen={setIsModalOpen}
              kcal={kcal}
              arrNotAllowedProducts={arrNotAllowedProducts}
            />
          )}
        </main>
      </Container>
    </>
  );
};
export default MainPage;
