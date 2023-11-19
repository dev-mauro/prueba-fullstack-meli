const endpoints = {
  search: (q) => `https://api.mercadolibre.com/sites/MLA/search?q=${q}`,
  product: (id) => `https://api.mercadolibre.com/items/${id}`,
  productDesc: (id) => `https://api.mercadolibre.com/items/${id}/description`
}

export { endpoints };