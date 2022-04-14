import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Title, Error } from './styles';

export function UserForm({ title, mutation, errorMsg, next }) {
  const { action, loading, error } = mutation();
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    action({
      variables: { input: { email: email.value, password: password.value } },
    }).then(next);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          type="text"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <Input type="password" placeholder="Password" {...password} />
        <Button type="submit" disabled={loading}>
          {title}
        </Button>
      </Form>
      {error && <Error>{errorMsg}</Error>}
    </>
  );
}
