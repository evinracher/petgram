import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [action, { loading, error }] = useMutation(LOGIN);

  return { action, loading, error };
};
