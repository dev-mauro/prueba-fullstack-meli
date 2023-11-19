import styles from '../styles/Header.module.css'
import { Search } from './Search';

export const Header = () => {

  return (
    <header className={ styles.header }>

      <div className={ styles.imageContainer }>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.5/mercadolibre/logo__large_plus.png"
          alt="Logo MercadoLibre"
        />
      </div>

      <Search />

    </header>
  )
}
