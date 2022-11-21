// import Loader from 'components/Loader';
// import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { stateAuthToken } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const token = useSelector(stateAuthToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
}
