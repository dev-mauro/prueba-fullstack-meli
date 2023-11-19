import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css'

import { useForm } from '../hooks/useForm';

export const Search = () => {

  const navigate = useNavigate();

  const { search, onInputChange } = useForm({
    search: '',
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();

    if( search == '' )
      return;

    navigate(`/items?search=${ search }`);
  }

  return (
    <form
      className={ styles.form }
      onSubmit={ onFormSubmit }
    >
      <input
        className={ styles.input }
        placeholder="Buscar productos, marcas y más..."
        name="search"
        value={ search }
        onChange={ onInputChange }
        type="text"
      />
      <button
        className={ styles.button }
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  )
}
