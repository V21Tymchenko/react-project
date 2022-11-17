import React from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductItem from 'components/DiaryProductItem';
import Container from 'components/Container';
import Header from 'components/Header';

export default function DiaryPage() {
  return (
    <div>
      <Header />
      <Container>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductItem />
      </Container>
    </div>
  );
}
