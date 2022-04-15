import { gql, useQuery } from '@apollo/client';

const GET_FAVORITES = gql`
  query getFavorites {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useFavorites = () => {
  const result = useQuery(GET_FAVORITES);

  const { loading, error, data } = result;

  return { data, loading, error };
};
