import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>

      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    </nav>
  );
}
