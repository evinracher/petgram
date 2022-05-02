import React from 'react';
import { Helmet } from 'react-helmet';
import { ListOfFavorites } from '../components/LisfOfFavorites';
import { useFavorites } from '../containers/useFavorites';

export default function Favorites() {
  const { favorites, loading, error } = useFavorites();

  const render = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>Error loading favorites</h2>;
    }

    return <ListOfFavorites favorites={favorites} />;
  };

  return (
    <>
      <Helmet>
        <title>Petgram - Your favorite photos</title>
        <meta
          name="description"
          content="Here you can find your favorite photos"
        />
      </Helmet>
      <div className="container">{render()}</div>
    </>
  );
}
