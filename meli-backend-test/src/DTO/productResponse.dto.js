const productResponseDTO = ( prod, desc ) => {
  return {
    item: {
      id: prod.id,
      title: prod.title,
      price: {
        currency: prod.currency_id,
        amount: Math.round( prod.price ),
        decimals: prod.price % 1,
      },
      picture: prod.thumbnail,
      condition: prod.condition,
      free_shiping: prod.shipping?.free_shiping,
      sold_quantity: prod.sold_quantity || 0,
      description: desc.plain_text,
    }
  }
}

export { productResponseDTO }