import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  // const onSubmit = (name, email, password) =>
  //   dispatch(register(name, email, password));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign up Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
