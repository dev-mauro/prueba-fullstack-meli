import { itemsDTO } from "./items.dto.js";

import { breadcrumbExtractor } from '../helper/breadcrumb.js';

const searchResponseDTO = ( meliRes ) => {
  const { results, filters } = meliRes;

  const categories = breadcrumbExtractor( filters );

  const items = results.map( item =>
    itemsDTO( item )
  );

  return {
    categories,
    items
  };
}

export { searchResponseDTO }