import { callApi } from './utilServices';

export const ProductService = (callService => {
  const searchProducts = params => {
    return callService({
      endpoint: 'items/search',
      params,
    });
  };

  const searchProductDetail = ({ id }) => {
    return callService({ endpoint: `items/${id}` });
  };

  return { searchProducts, searchProductDetail };
})(callApi);
