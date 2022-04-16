import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({
  type = 'submit',
  children,
  disabled,
  onClick,
}) => (
  <Button type={type} disabled={disabled} onClick={onClick}>
    {children}
  </Button>
);
