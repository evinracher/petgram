import React, { useEffect, useContext } from 'react';
import { Router } from '@reach/router';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Profile } from './pages/Profile';
import { Favorites } from './pages/Favorites';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { GlobalStyles } from './styles/GlobalStyles';
import AppContext, { Context } from './Context';

function App() {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <AppContext.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favorites path="/favorites" />
              <Profile path="/profile" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favorites" />
              <NotRegisteredUser path="/profile" />
            </Router>
          )
        }
      </AppContext.Consumer>

      <NavBar />
    </>
  );
}

export default App;
