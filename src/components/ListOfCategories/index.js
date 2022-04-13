import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

const API_URL = 'https://petgram-server-evinracher.vercel.app';

export function ListOfCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
}
