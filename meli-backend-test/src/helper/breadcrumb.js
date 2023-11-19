
// Extrae el breadcrumb de la lista de filtros
const breadcrumbExtractor = ( filters ) => {
  const breadcrumbs = [];

  filters.forEach( filter => {
    const { values } = filter;

    for( let element of values )
      breadcrumbs.push( element.name );
  });

  return breadcrumbs;
}

export { breadcrumbExtractor };