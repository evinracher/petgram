import React from 'react';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../containers/useRegisterMutation';
import Context from '../Context';

export function NotRegisteredUser() {
  const { signIn, loading, error } = useRegisterMutation();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onRegister = (email, password) => {
          signIn({ variables: { input: { email, password } } }).then(
            activateAuth
          );
        };

        const errorMsg =
          error && 'There was an error while registering the user';

        return (
          <>
            <UserForm
              title="Register"
              error={errorMsg}
              disabled={loading}
              onSubmit={onRegister}
            />
            <UserForm title="Log in" onSubmit={onRegister} />
          </>
        );
      }}
    </Context.Consumer>
  );
}
