import { useMutation, gql } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [action, { loading, error }] = useMutation(REGISTER);

  return { action, loading, error };
};
