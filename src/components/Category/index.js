import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

export function Category({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) {
  return (
    <Link to={path}>
      <Image src={cover} alt="category_image" />
      {emoji}
    </Link>
  );
}
