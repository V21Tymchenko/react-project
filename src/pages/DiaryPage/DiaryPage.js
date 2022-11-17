import React from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm';
import DiaryProductItem from 'components/DiaryProductItem';
import Container from 'components/Container';
import Header from 'components/Header';

export default function DiaryPage() {
  return (
    <div>
      <Container>
        <Header />
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductItem />
      </Container>
    </div>
  );
}
