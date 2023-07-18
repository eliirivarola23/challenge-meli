import axios from 'axios';
import { getValidationError } from '../helpers/get-validation-error';
import { SnackbarUtilities } from '../helpers/snackbar-manager';

export const AxiosInterceptor = () => {
  const updateHeader = request => {
    const newHeaders = {
      'Content-Type': 'application/json',
    };

    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use(request => updateHeader(request));

  axios.interceptors.response.use(
    response => {
      return response.data || response;
    },
    error => {
      const errorCode = error.response?.data?.error || error.code;
      const message = error.response?.data?.message || '';
      if (errorCode) {
        const newErrors = getValidationError(errorCode, message);
        if (newErrors) SnackbarUtilities.error(newErrors);
      }

      throw error.response?.data || error;
    }
  );
};
