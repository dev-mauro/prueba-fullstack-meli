import styles from '../styles/product.module.css';

export const ProductDetailDescription = ({ description }) => {
  return (
    <div className={ styles.description }>
    {/* Descripción */}
    <h3>Descripción del producto</h3>
    <p>{ description }</p>
  </div>
  )
}
