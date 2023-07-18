module.exports = {
  dataAdapterResults: response => {
    const categoriesFilt = response.data.filters.filter(item => item.id === 'category');
    const categories = categoriesFilt[0]?.values?.map(item => item.name);

    const itemsAdapted = response?.data?.results?.map(
      ({ id, title, price, thumbnail, condition, currency_id, available_quantity, shipping, sold_quantity }) => {
        const priceAdapted = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return {
          id,
          title,
          picture: thumbnail,
          condition,
          free_shipping: shipping?.free_shipping,
          price: {
            currency: currency_id?.toString(),
            amount: available_quantity,
            decimals: priceAdapted ? priceAdapted + ',00' : '',
          },
        };
      }
    );

    return {
      items: itemsAdapted?.slice(0, 4),
      categories: categories || [],
    };
  },

  dataAdapterDetail: ({ response, responseOfDescription }) => {
    const data = { ...(response?.data || {}), ...(responseOfDescription?.data || {}) };
    const { id, title, price, thumbnail, condition, plain_text, currency_id, available_quantity, shipping, sold_quantity } = data;
    const priceAdapted = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const item = {
      id,
      title,
      picture: thumbnail,
      condition,
      free_shipping: shipping?.free_shipping,
      sold_quantity: parseInt(sold_quantity),
      description: plain_text || '',
      price: {
        currency: currency_id?.toString(),
        amount: available_quantity,
        decimals: priceAdapted ? priceAdapted + ',00' : '',
      },
    };

    return { item };
  },
};
