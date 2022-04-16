import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Profile } from './pages/Profile';
import { Favorites } from './pages/Favorites';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { GlobalStyles } from './styles/GlobalStyles';
import { Context } from './Context';
import { NotFound } from './pages/NotFound';

function App() {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favorites" to="/login" />}
        {!isAuth && <Redirect from="/profile" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favorites path="/favorites" />
        <Profile path="/profile" />
      </Router>
      <NavBar />
    </>
  );
}

export default App;
