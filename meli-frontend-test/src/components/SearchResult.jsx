import { SearchItem } from "./SearchItem"

import styles from '../styles/search.module.css';

export const SearchResult = ({ products }) => {
  const displayedProducts = products.splice(0,4);

  return <ul className={ styles.ul }>
  {
    displayedProducts.map( item => <SearchItem item={item} key={item.id}/>)
  }
  </ul>
}
