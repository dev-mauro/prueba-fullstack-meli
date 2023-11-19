import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Breadcrumb, SearchResult } from '../components';
import { ProductDetailPage } from '../pages'

import styles from '../styles/search.module.css';

export const SearchPage = () => {

  const location = useLocation();
  const { search } = queryString.parse( location.search );

  const [ searchResult, setSearchResult ] = useState({
    items: [],
    categories: []
  });

  useEffect(() => {
    if( !search ) return;
    
    // fetch de datos
    fetch(`http://127.0.0.1:8080/api/items?q=${ search }`)
    .then( resp => resp.json())
    .then( ({ payload }) => {
      const { items, categories } = payload;
      setSearchResult({ items, categories })
    });
  }, [ location ]);

  return (
  <main className={ styles.main }>
    <Breadcrumb categories={ searchResult.categories }/>

    <Routes>

      <Route path="/" element={ <SearchResult products={searchResult.items} /> }/>
      <Route path="/:id" element={ <ProductDetailPage /> } />

    </Routes>
  </main>
  )
}
 