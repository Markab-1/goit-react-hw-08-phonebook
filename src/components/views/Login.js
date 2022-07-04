import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import s from './styles.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.formContainer}>
      <h1>Login, if you have an account</h1>
      <form onSubmit={handleSubmit} className={s.inputContainer}>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          title="Please enter the correct email"
          required
          onChange={handleChange}
          className={s.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          pattern="^[a-zA-Z0-9._%+-@]*$"
          title="Password may contain only letters, numbers, and symbols ._%+-@ "
          required
          onChange={handleChange}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default Login;
