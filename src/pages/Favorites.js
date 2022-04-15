import React, { useState, useEffect } from 'react';
import { ListOfFavorites } from '../components/LisfOfFavorites';
import { useFavorites } from '../containers/useFavorites';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { data, loading, error } = useFavorites();

  useEffect(() => {
    if (data?.favs) {
      setFavorites(data.favs);
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error loading favorites</h2>;
  }

  return <ListOfFavorites favorites={favorites} />;
}
