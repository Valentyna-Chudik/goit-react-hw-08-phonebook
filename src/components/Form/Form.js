import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/contacts-operations';
import {
  getContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import Loader from '../Loader/Loader';
import styles from './Form.module.css';

export default function Form() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
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
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (Number.isNaN(+number)) {
      alert('Phone number should consist only of digits.');
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
          <span className={styles.inputName}>Name</span>
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
          <span className={styles.inputName}>Number</span>
          <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder="Number"
            value={number}
            onChange={handleInputChange}
          ></input>
        </label>
        {!isLoading && (
          <button className={styles.buttonAdd} type="submit">
            Add contact
          </button>
        )}
      </form>
      {isLoading && <Loader />}
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
