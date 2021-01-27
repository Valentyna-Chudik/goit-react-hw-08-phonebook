import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { filterChange } from '../../redux/contacts/contacts-actions';
import {
  getContacts,
  getFilter,
  getError,
} from '../../redux/contacts/contacts-selectors';

import styles from './Filter.module.css';

export default function Filter() {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterChange(e.target.value));

  return (
    <>
      {contacts.length > 0 && !error && (
        <label className={styles.label}>
          <span className={styles.labelName}>Find contacts by name</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            value={value}
            onChange={onChange}
          />
        </label>
      )}
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
