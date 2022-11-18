import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Header from 'components/Header';
import Modal from 'components/Modal';
import RightSideBar from 'components/RightSideBar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlesetDataToApiWithId } from 'redux/user/user-operation';
import { selectUserId } from 'redux/user/user-selectors';

import s from './CalculatePage.module.css';

const CalculatorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const kcal = useSelector(state => state.dailyRate.dailyRate);
  const arrNotAllowedProducts = useSelector(
    state => state?.dailyRate?.notAllowedProducts
  );
  const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);

  // const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);

  // const handleSetStorage = dataFromForm => {
  //   localStorage.setItem('calculateUserInfo', JSON.stringify(dataFromForm));
  // };
  const userid = useSelector(selectUserId);

  const dispatch = useDispatch();

  const handlesetDataToApiId = data => {
    dispatch(handlesetDataToApiWithId({ body: data, userid }));
  };

  return (
    <>
      <Header />
      <Container>
        <div className={s.containerFlex}>
          <div>
            <h1 className={s.title}>
              Calculate your daily calorie intake right now
            </h1>
            <DailyCaloriesForm
              // handleSetStorage={handleSetStorage}
              handlesetDataToApi={handlesetDataToApiId}
              setIsModalOpen={setIsModalOpen}
            />
            {arrNotAllowedProducts && isModalOpen && (
              <Modal
                setIsModalOpen={setIsModalOpen}
                kcal={kcal}
                arrNotAllowedProducts={newArrNotAllowedProducts}
              />
            )}
          </div>
          <div className={s.containerSideBar}>
            <RightSideBar />
          </div>
        </div>
      </Container>
    </>
  );
};
export default CalculatorPage;
