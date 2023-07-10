import { AxiosInterceptor } from "../interceptors/axios.interceptor";

export const ProductSearch = ((callService) => {
  const createUser = (params) => {
    return callService({
      endpoint: "https://pokeapi.co/api/v2/pokemon/ditto",
      method: "get",
      params,
    });
  };

  return { createUser };
})(AxiosInterceptor);
