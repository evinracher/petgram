import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';

export function Home({ id }) {
  return [<ListOfCategories />, <ListOfPhotoCards categoryId={id} />];
}
