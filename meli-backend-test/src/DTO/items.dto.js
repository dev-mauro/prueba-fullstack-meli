const itemsDTO = ( item ) => {
  const amount = Math.round( item.price );
  const decimals = item.price % 1;

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount,
      decimals,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }
}

export { itemsDTO }