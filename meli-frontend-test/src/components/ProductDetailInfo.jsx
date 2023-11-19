import styles from '../styles/product.module.css';

export const ProductDetailInfo = ({ title, condition, price, sold_quantity }) => {
  const decimalString = ('' + price?.decimals).split('.')[1] || '00';

  return (
    <div className={ styles.info }>
      <span className={ styles.condition }>{ condition }</span>
      <i className="fa-solid fa-circle"></i>
      <span className={ styles.soldQuantity }>{ sold_quantity } vendidos</span>
      <h2>{ title }</h2>
      <span className={ styles.price }>${ price?.amount }</span>
      <span className={ styles.decimals }>{ decimalString }</span>
      <button>Comprar</button>
    </div>
  )
}
