import React, { useEffect, useState, useRef } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Article, ImgWrapper, Button, Img } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, likes = 0 }) {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, elRef] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={elRef}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes
          </Button>
        </>
      )}
    </Article>
  );
}
