import React from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductItem from 'components/DiaryProductItem';
import Container from 'components/Container';

import Header from 'components/Header';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import s from './DiaryPage.module.css';

export default function DiaryPage() {
  return (
    <div>
      <Header />
      <Container>
        <div className={s.wrapper}>
          <div className={s.leftSide}>
            <DiaryDateСalendar />
            <DiaryAddProductForm />
            <DiaryProductItem />
          </div>
          <div className={s.containerSideBar}>
            <RightSideBar />
          </div>
        </div>
      </Container>
    </div>
  );
}
