import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact>
        Sign up
      </NavLink>
      <NavLink to="/login" exact>
        Sign in
      </NavLink>
    </div>
  );
}
