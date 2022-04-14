import { useMutation, gql } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [signIn, { loading, error }] = useMutation(REGISTER);

  return { signIn, loading, error };
};
