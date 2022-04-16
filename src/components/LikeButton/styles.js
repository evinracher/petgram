import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  cursor: pointer;
  & svg {
    margin-right: 4px;
  }
  &[disabled] {
    cursor: not-allowed;
  }
`;
