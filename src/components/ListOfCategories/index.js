import React, { useState, useRef, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

const API_URL = 'https://petgram-server-evinracher.vercel.app';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

function ListOfCategoriesComponent() {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);
  const showFixedRef = useRef();
  showFixedRef.current = showFixed;

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      // Update state only when needed
      if (showFixedRef.current !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(showFixed)}
    </>
  );
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
