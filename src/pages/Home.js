import React, { useEffect, useContext } from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { Context } from '../Context';

export function Home({ id }) {
  const { removeAuth } = useContext(Context);

  useEffect(() => {
    console.log('rendering');
    const token = window.sessionStorage.getItem('token');
    if (!token) {
      removeAuth();
    }
  });

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
}
