import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { PhotoCard } from '../components/PhotoCard';

const getPhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
    }
  }
`;

export function PhotoCardWithQuery({ id }) {
  const result = useQuery(getPhoto, {
    variables: {
      id,
    },
  });
  const { loading, error, data } = result;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }
  return <PhotoCard {...data.photo} />;
}
