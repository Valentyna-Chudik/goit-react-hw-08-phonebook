import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
 
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
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return alert(`All fields must be completed.`);
    }
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please Sign Up</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          className={styles.textField}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          className={styles.textField}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          className={styles.textField}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          margin="dense"
        />
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
