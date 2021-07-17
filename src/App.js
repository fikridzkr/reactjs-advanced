import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './features/counter/Counter';
import Header from './features/header/Header';
import Auth from './features/auth/Auth';
import UserProfile from './features/userProfile/UserProfile';
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
