import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
