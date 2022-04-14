import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Title } from './styles';

export function UserForm({ onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <Input
        type="text"
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
      />
      <Input type="password" placeholder="Password" {...password} />
      <Button type="submit">{title}</Button>
    </Form>
  );
}
