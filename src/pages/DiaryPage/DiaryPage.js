import React, { useState } from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductItem from 'components/DiaryProductItem/DiaryProductItem';
import Container from 'components/Container';

import Header from 'components/Header';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import s from './DiaryPage.module.css';

const DiaryPage = () => {
  const [addDairyProducts, setAddDairyProducts] = useState(true);

  return (
    <div>
      <Header />
      <Container>
        <div className={s.wrapper}>
          <div className={s.leftSide}>
            <DiaryDateСalendar />
            {addDairyProducts && (
              <DiaryAddProductForm setAddDairyProducts={setAddDairyProducts} />
            )}
            <DiaryProductItem setAddDairyProducts={setAddDairyProducts} />
          </div>
          <div className={s.containerSideBar}>
            <RightSideBar />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default DiaryPage;
