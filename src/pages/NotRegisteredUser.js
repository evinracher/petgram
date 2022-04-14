import React from 'react';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../containers/useRegisterMutation';
import Context from '../Context';

export function NotRegisteredUser() {
  const { signIn } = useRegisterMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = (email, password) => {
          signIn({ variables: { input: { email, password } } }).then(
            activateAuth
          );
        };

        return (
          <>
            <UserForm title="Register" onSubmit={onSubmit} />,
            <UserForm title="Log in" onSubmit={onSubmit} />,
          </>
        );
      }}
    </Context.Consumer>
  );
}
