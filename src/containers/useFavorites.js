import { useEffect, useState } from 'react';
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
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    result.refetch();
  });

  useEffect(() => {
    if (data?.favs && !loading) {
      setFavorites(data.favs);
    }
  }, [loading]);

  return { favorites, loading, error };
};
