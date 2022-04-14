import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export default function LikeButton({ liked, likes, onClick }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes} likes
    </Button>
  );
}