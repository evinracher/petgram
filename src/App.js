import React from 'react';
import { Router } from '@reach/router';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { GlobalStyles } from './styles/GlobalStyles';

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
      <NavBar />
    </>
  );
}

export default App;
