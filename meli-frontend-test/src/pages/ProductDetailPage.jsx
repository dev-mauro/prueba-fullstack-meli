import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import { ProductDetailInfo, ProductDetailDescription } from "../components";

import styles from '../styles/product.module.css';

export const ProductDetailPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if( !id ) return;

    setLoading( true );

    fetch(`http://127.0.0.1:8080/api/items/${ id }`)
    .then( resp => resp.json())
    .then( ({ success, payload }) => {
      if ( !success )
        return navigate('/');

      const { item } = payload;
      setProduct( item );
      setLoading( false );
    });

  }, [ id ]);

  if( loading )
    return <h1>...</h1>

  return (
    <div className={ styles.container }>

      <div className={ styles.imgContainer }>
        <img src={ product.picture } alt="" />
      </div>

      <ProductDetailInfo {...product}/>
      <ProductDetailDescription description={ product.description }/>

    </div>
  )
}
