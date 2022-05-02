import React, { useContext } from 'react';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../containers/useRegisterMutation';
import { useLoginMutation } from '../containers/useLoginMutation';
import { Context } from '../Context';

export function NotRegisteredUser() {
  const { activateAuth } = useContext(Context);
  return (
    <div className="container">
      <UserForm
        title="Register"
        mutation={useRegisterMutation}
        errorMsg="There was an error while registering the user"
        next={({ data }) => {
          const { signup } = data;
          activateAuth(signup);
        }}
      />
      <UserForm
        title="Login"
        mutation={useLoginMutation}
        errorMsg="There was an error while login"
        next={({ data }) => {
          const { login } = data;
          activateAuth(login);
        }}
      />
    </div>
  );
}
