import Container from 'components/Container';
import RegistrationForm from 'components/RegistrationForm';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
      <Container>
        <RegistrationForm />
      </Container>
      <Outlet />
    </>
  );
}
