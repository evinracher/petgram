import React, { useEffect, useState, useRef } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Article, ImgWrapper, Button, Img } from './styles';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, likes = 0 }) {
  const elRef = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      console.log('getting from local storage', like);
      return like;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(elRef.current);
    });
  }, [elRef]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      console.log('saving in local storage', value);
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Article ref={elRef}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {likes} likes
          </Button>
        </>
      )}
    </Article>
  );
}
