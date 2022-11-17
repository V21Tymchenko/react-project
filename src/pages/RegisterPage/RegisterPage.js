import Container from 'components/Container';
import Header from 'components/Header';
import RegistrationForm from 'components/RegistrationForm';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
      <Container>
        <Header />
        <RegistrationForm />
      </Container>
      <Outlet />
    </>
  );
}
