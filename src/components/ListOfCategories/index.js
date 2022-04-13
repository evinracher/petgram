import React, { useState, useRef, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

const API_URL = 'https://petgram-server-evinracher.vercel.app';

export function ListOfCategories() {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);
  const showFixedRef = useRef();
  showFixedRef.current = showFixed;

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
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
