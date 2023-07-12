import axios from "axios";
import { getValidationError } from "../helpers/get-validation-error";
import { SnackbarUtilities } from "../helpers/snackbar-manager";

export const AxiosInterceptor = async ({ endpoint, method, params,  }) => {
  const updateHeader = (request) => {
    const author = {
      name: process.env.REACT_APP_API_KEY,
      lastName: process.env.REACT_APP_SECRET_TOKEN,
    };

    const newHeaders = {
      Authorization: btoa(JSON.stringify(author)),
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

  await axios({
    method: method,
    url: `${process.env.REACT_APP_HOST}${endpoint}`,
    data: params,
  });
};
