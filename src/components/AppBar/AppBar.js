import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
