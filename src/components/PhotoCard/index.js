import React from 'react';
import { ImgWrapper, Button, Img } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, likes = 0 }) {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size="32px" />
        {likes} likes
      </Button>
    </article>
  );
}
