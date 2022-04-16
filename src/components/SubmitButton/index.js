import React from 'react';
import PropTypes from 'prop-types';
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

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
