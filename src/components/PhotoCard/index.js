import React from 'react';
import { Link } from '@reach/router';
import { Article, ImgWrapper, Img } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import LikeButton from '../LikeButton';
import useToggleLikeMutation from '../../containers/useToggleLikeMutation';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, liked = false, likes = 0 }) {
  const [show, elRef] = useNearScreen();
  const { mutation } = useToggleLikeMutation();

  const handleLike = () => {
    mutation({ variables: { input: { id } } });
  };

  return (
    <Article ref={elRef}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={src} />
            </ImgWrapper>
          </Link>
          <LikeButton {...{ liked, likes }} onClick={handleLike} />
        </>
      )}
    </Article>
  );
}
