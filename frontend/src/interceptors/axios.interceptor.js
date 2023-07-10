import axios from "axios";
import { getValidationError } from "../helpers/get-validation-error";
import { SnackbarUtilities } from "../helpers/snackbar-manager";

export const AxiosInterceptor = async ({ endpoint, method, params }) => {
  const updateHeader = (request) => {
    const author = { name: "Eliana", lastName: "rivarola" };
    const newHeaders = {
      Authorization: author,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => updateHeader(request));

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const newErrors = getValidationError(error.code);
      console.error(newErrors);
      SnackbarUtilities.error(newErrors);
      return error;
    }
  );

  return await axios({
    method: method,
    url: endpoint,
    data: params,
  });
};
