import React from 'react';
import { UserForm } from '../components/UserForm';
import Context from '../Context';

export function NotRegisteredUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => [
        <UserForm title="Register" onSubmit={activateAuth} />,
        <UserForm title="Log in" onSubmit={activateAuth} />,
      ]}
    </Context.Consumer>
  );
}
