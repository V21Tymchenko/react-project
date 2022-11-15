<<<<<<< HEAD
import CalculatorPage from 'pages/CalculatorPage';
=======
import RegisterPage from 'pages/RegisterPage';
>>>>>>> 3398f67194cf8b729f0f95e45fca7fba860c4e98
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>

      <Route path="/" element={<MainPage />}>
        <Route index element={<div>Home</div>} />
<<<<<<< HEAD
        <Route path="register" element={<div>REGISTER</div>} />
        <Route path="login" element={<div>LOGIN</div>} />
        <Route path="calculator" element={<CalculatorPage />} />
=======
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="calculator" element={<div>CALCULATOR</div>} />
>>>>>>> 3398f67194cf8b729f0f95e45fca7fba860c4e98
        <Route path="diary" element={<div>DIARY</div>} />
      </Route>
    </Routes>
  );
};
