// import Loader from 'components/Loader';
import React from 'react';
// import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { stateAuthToken } from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const token = useSelector(stateAuthToken);
  return token ? <Navigate to="/calculator" /> : <Outlet />;
}
