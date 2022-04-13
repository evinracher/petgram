import React, { useEffect, useState, useRef } from 'react';
import { Article, ImgWrapper, Button, Img } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, likes = 0 }) {
  const elRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(elRef.current);
  }, [elRef]);

  return (
    <Article ref={elRef}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} likes
          </Button>
        </>
      )}
    </Article>
  );
}
