import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
