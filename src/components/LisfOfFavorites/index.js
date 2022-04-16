import React from 'react';
import { Link, Grid, Image } from './styles';

export const ListOfFavorites = ({ favorites = [] }) => {
  return (
    <Grid>
      {!favorites.length && <h2>You haven't liked any post yet</h2>}
      {favorites.map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`}>
          <Image src={item.src} alt={item.title} />
        </Link>
      ))}
    </Grid>
  );
};
