import { useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/search.module.css';

export const SearchItem = ({ item }) => {

  const aRef = useRef();

  const onElementClick = () => {
    const a = aRef.current;
    a.click();
  }

  return (
    <li
      className={ styles.li }
      onClick={ onElementClick }
    >
      <div className={ styles.imageContainer }>
        <img src={ item.picture } alt="" />
      </div>
      <div className={ styles.infoContainer }>
        <p className={ styles.price }>${ item.price.amount }</p>
        <Link
          to={`/items/${ item.id }`}
          ref={ aRef }
        >
          { item.title }
        </Link>
      </div>
    </li>
  )
}