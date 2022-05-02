import React, { useContext } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { Article, ImgWrapper, Img } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import LikeButton from '../LikeButton';
import useToggleLikeMutation from '../../containers/useToggleLikeMutation';
import { Context } from '../../Context';

export function PhotoCard({ id, src, liked, likes }) {
  const [show, elRef] = useNearScreen();
  const { mutation } = useToggleLikeMutation();
  const { isAuth } = useContext(Context);

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
          <LikeButton
            {...{ liked, likes }}
            onClick={handleLike}
            disabled={!isAuth}
          />
        </>
      )}
    </Article>
  );
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName) => {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than zero`);
    }

    return null;
  },
};

PhotoCard.defaultProps = {
  likes: 0,
};
