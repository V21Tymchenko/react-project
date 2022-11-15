import RegisterPage from 'pages/RegisterPage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>

      <Route path="/" element={<MainPage />}>
        <Route index element={<div>Home</div>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="calculator" element={<div>CALCULATOR</div>} />
        <Route path="diary" element={<div>DIARY</div>} />
      </Route>
    </Routes>
  );
};
