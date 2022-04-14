import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { List } from './styles';

export function ListOfPhotoCardsComponent({ photos = [] }) {
  return (
    <List>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  );
}
