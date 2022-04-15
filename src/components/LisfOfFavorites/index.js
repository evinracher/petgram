import React from 'react';
import { Link, Grid, Image } from './styles';

export const ListOfFavorites = ({ favorites = [] }) => (
  <Grid>
    {favorites.map((item) => (
      <Link key={item.id} to={`/detail/${item.id}`}>
        <Image src={item.src} alt={item.title} />
      </Link>
    ))}
  </Grid>
);
