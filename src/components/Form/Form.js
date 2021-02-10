import { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './Form.module.css';

export default function Form() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => dispatch(addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert(`All fields must be completed.`);
    } else if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (name.length > 18) {
      alert('Name is too long. Maximum 18 characters.');
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      onSubmit(name, number);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label className={styles.label}>
          <NumberFormat
            placeholder="Number"
            format="(###) ###-##-##"
            mask="_"
            pattern="^[0-9\s\(\)\-]{15}"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>

        <Button variant="contained" color="primary" type="submit">
          Add contact
        </Button>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
