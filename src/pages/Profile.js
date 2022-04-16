import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Context } from '../Context';

export function Profile() {
  const { removeAuth } = useContext(Context);
  return (
    <div>
      <h1>User</h1>
      <SubmitButton type="button" onClick={removeAuth}>
        Log out
      </SubmitButton>
    </div>
  );
}
