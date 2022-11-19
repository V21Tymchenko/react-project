import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRateOperation } from 'redux/dailyRate/dailyRate-operations';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // const handleSetStorage = dataFromForm => {
  //   localStorage.setItem('calculateUserInfo', JSON.stringify(dataFromForm));
  // };

  async function handlesetDataToApi(data) {
    try {
      setIsLoading(true);
      await dispatch(dailyRateOperation(data));
      setIsModalOpen(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  const kcal = useSelector(state => state?.dailyRate?.dailyRate);
  const arrNotAllowedProducts = useSelector(state =>
    state?.dailyRate?.notAllowedProducts.slice(0, 5)
  );

  return (
    <>
      <Header />
      <Container>
        {isLoading && <Loader />}
        <main className={s.backGround}>
          <h1 className={s.title}>
            Calculate your daily calorie intake right now
          </h1>
          <DailyCaloriesForm handlesetDataToApi={handlesetDataToApi} />
          {arrNotAllowedProducts && isModalOpen && (
            <Modal
              kcal={kcal}
              arrNotAllowedProducts={arrNotAllowedProducts}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </main>
      </Container>
    </>
  );
};
export default MainPage;
