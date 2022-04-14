import React from 'react';
import { Link } from '@reach/router';
import { Article, ImgWrapper, Img } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import LikeButton from '../LikeButton';
import useToggleLikeMutation from '../../containers/ToggleLikeMutation';

const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export function PhotoCard({ id, src = DEFAULT_IMG, likes = 0 }) {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, elRef] = useNearScreen();
  const { mutation } = useToggleLikeMutation();

  const handleLike = () => {
    !liked && mutation({ variables: { input: { id } } });
    setLiked(!liked);
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
