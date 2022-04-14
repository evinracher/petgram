import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Title, Error } from './styles';

export function UserForm({ title, error, disabled, onSubmit }) {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email.value, password.value);
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
        <Button type="submit" disabled={disabled}>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
}
