import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    () => window.sessionStorage.getItem('token') != null
  );

  const value = {
    isAuth,
    activateAuth: (token) => {
      console.log(token);
      if (token) {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
      }
    },
    removeAuth: () => {
      setIsAuth(false), window.sessionStorage.removeItem('token');
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const AppContext = { Provider, Consumer: Context.Consumer };

export default AppContext;
