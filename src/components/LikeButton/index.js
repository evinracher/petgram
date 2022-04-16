import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function LikeButton({ liked, likes, onClick, disabled }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick} disabled={disabled}>
      <Icon size="32px" />
      {likes} likes
    </Button>
  );
}

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
