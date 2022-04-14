import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';

export function Detail({ detailId }) {
  return <PhotoCardWithQuery id={detailId} />;
}
