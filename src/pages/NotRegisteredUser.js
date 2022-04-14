import React from 'react';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../containers/useRegisterMutation';
import { useLoginMutation } from '../containers/useLoginMutation';
import Context from '../Context';

export function NotRegisteredUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => (
        <>
          <UserForm
            title="Register"
            mutation={useRegisterMutation}
            errorMsg="There was an error while registering the user"
            next={activateAuth}
          />
          <UserForm
            title="Login"
            mutation={useLoginMutation}
            errorMsg="There was an error while login"
            next={activateAuth}
          />
        </>
      )}
    </Context.Consumer>
  );
}
