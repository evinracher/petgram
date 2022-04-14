import { gql, useMutation } from '@apollo/client';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export default function useToggleLikeMutation() {
  const [mutation, { loading, error }] = useMutation(LIKE_PHOTO);
  return { mutation, loading, error };
}
