import { useDispatch, useSelector } from 'react-redux';

import { getUserName } from '../../redux/auth/auth-selectors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logOut } from '../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

import defaultAvatar from '../../avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={styles.container}>
      <img
        src={defaultAvatar}
        alt=""
        width="36"
        height="40"
        className={styles.avatar}
      />
      <span className={styles.name}>Welcome to Phonebook, {name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logOut())}
      >
        Sign out
        <ExitToAppIcon />
      </button>
    </div>
  );
}
