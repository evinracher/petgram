import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';

export function UserForm({ onSubmit }) {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
      />
      <input type="password" placeholder="Password" {...password} />
      <button type="submit">Log in</button>
    </form>
  );
}
