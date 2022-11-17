import React from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductItem from 'components/DiaryProductItem';
import Container from 'components/Container';
import RightSideBar from 'components/RightSideBar/RightSideBar';

export default function DiaryPage() {
  return (
    <div>
      <Container>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductItem />
        <RightSideBar/>
      </Container>
    </div>
  );
}
