import { AxiosInterceptor } from "../interceptors/axios.interceptor";

export const ProductSearch = ((callService) => {
  const createUser = (params) => {
    return callService({
      endpoint: "items/search",
      method: "get",
      params,
    });
  };

  return { createUser };
})(AxiosInterceptor);
