import React from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';

export function Home({ id }) {
  return (
    <>
      <Helmet>
        <title>Petgram - Your pet photos app</title>
        <meta
          name="description"
          content="Petgram allows you to find beautiful pet photos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
}
