import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const input = {
    email: setEmail,
    password: setPassword,
  };

  const onInput = evt => {
    input[evt.target.name](evt.target.value.trim());
  };

  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={s.block}>
      <h2 className={s.title}>Sign in</h2>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          Email *
          <input
            className={s.input}
            required
            onChange={onInput}
            name="email"
            value={email}
            type="email"
          />
        </label>
        <label className={s.label}>
          Password *
          <input
            minLength={7}
            className={s.input}
            required
            onChange={onInput}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
