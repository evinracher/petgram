import React from 'react';
import { Category } from '../Category';
import { categories } from '../../../api/db.json';
import { List, Item } from './styles';

export function ListOfCategories() {
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
