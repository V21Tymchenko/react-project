import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import s from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    email: setEmail,
    password: setPassword,
    username: setUserName,
  };

  const handleInput = e => {
    inputs[e.target.name](e.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const userInfo = {
      username,
      email,
      password,
    };
    dispatch(register(userInfo));
  };

  return (
    <section>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleFormSubmit} className={s.form}>
          <label htmlFor="">
            Name *
            <input
              type="text"
              required
              onChange={handleInput}
              name="username"
              value={username}
            />
          </label>
          <label htmlFor="">
            Email *
            <input
              type="email"
              required
              onChange={handleInput}
              name="email"
              value={email}
            />
          </label>
          <label htmlFor="">
            Password *
            <input
              type="password"
              required
              onChange={handleInput}
              name="password"
              value={password}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}
