import Container from 'components/Container';
import LoginForm from 'components/LoginForm';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <Outlet />
    </>
  );
}
