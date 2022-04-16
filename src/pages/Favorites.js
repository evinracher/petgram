import React, { useState, useEffect } from 'react';
import { ListOfFavorites } from '../components/LisfOfFavorites';
import { useFavorites } from '../containers/useFavorites';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { data, loading, error } = useFavorites();
  const [state, setState] = useState({
    loading: false,
    error: false,
  });

  useEffect(() => {
    setState({ ...state, loading });
    if (data?.favs) {
      console.log('rendering');
      setFavorites(data.favs);
      setState({ loading, error });
    }
  }, [state]);

  if (state.loading) {
    return <h2>Loading...</h2>;
  }

  if (state.error) {
    return <h2>Error loading favorites</h2>;
  }

  return <ListOfFavorites favorites={favorites} />;
}
