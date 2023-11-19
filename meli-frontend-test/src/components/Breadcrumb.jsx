import styles from '../styles/search.module.css'

import { BreadcrumbElement } from "./BreadcrumbElement"

export const Breadcrumb = ({ categories }) => {
  return (
    <ul className={ styles.breadcrumb }> {
      categories.map( (cat, i) => 
        <BreadcrumbElement category={ cat } key={ i }/>
      )
    }</ul>
  )
}
