import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import logo from '../../img/logo.png';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav className={styles.navigation}>
      <NavLink exact to="/">
        <img src={logo} alt="logo" width="40" className={styles.logo} />
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
