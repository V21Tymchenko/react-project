import Container from 'components/Container';
import Header from 'components/Header';
import Loader from 'components/Loader';
import RegistrationForm from 'components/RegistrationForm';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <Container>
        <RegistrationForm />
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default RegisterPage;
