import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthenticated } from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const shouldRedirect = isAuthenticated && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
