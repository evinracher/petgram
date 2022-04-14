import { useQuery, gql } from '@apollo/client';

export function usePhotos(categoryId) {
  const getPhotos = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  const { data } = useQuery(getPhotos, {
    variables: {
      categoryId,
    },
  });

  return data?.photos ?? [];
}
