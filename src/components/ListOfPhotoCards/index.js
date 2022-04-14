import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export function ListOfPhotoCards() {
  const result = useQuery(withPhotos);
  const { data } = result;
  return (
    <ul>
      {data?.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
}
