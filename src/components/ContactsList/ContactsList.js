import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Notification from '../Notification/Notification';
import {
  fetchContact,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import {
  getVisibleContacts,
  getError,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      {visibleContacts.length > 0 && !error && (
        <ul className={styles.contactsList}>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={styles.contactsItem} key={id}>
              <span className={styles.contactName}>
                {' '}
                <PermContactCalendarIcon className={styles.icon} />
                {name}
              </span>

              <span className={styles.contactNumber}>
                {' '}
                <SmartphoneIcon className={styles.icon} />
                {number}
              </span>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
      {!visibleContacts.length && !error && !isLoading && (
        <Notification message="No records yet." />
      )}
      {error && <h2>{error.message}</h2>}
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
