import React from 'react';
import Context from '../Context';

export function NotRegisteredUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => (
        <form onSubmit={activateAuth}>
          <button type="submit">Log in</button>
        </form>
      )}
    </Context.Consumer>
  );
}
