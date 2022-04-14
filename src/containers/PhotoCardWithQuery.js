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
    }
  }
`;

export function PhotoCardWithQuery({ id }) {
  const { data } = useQuery(getPhoto, {
    variables: {
      id,
    },
  });
  if (data?.photo) {
    return <PhotoCard {...data.photo} />;
  }
}
