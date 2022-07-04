import { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './styles.module.css';
import authOperations from '../../redux/auth/auth-operations';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.formContainer}>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className={s.inputContainer}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={s.input}
        />
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
          Register me
        </button>
      </form>
    </div>
  );
};

export default Registration;
