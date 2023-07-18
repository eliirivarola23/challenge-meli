import axios from 'axios';
import { AxiosInterceptor } from '../interceptors/axios.interceptor';

export const callApi = async ({ endpoint, method = 'get', params }) => {
  AxiosInterceptor();
  const abortController = new AbortController();
  const signal = abortController.signal;

  let api = `${process.env.REACT_APP_HOST}${endpoint}`;
  if (/https|http?/.test(endpoint)) api = endpoint;

  let response;

  try {
    response = await axios({ url: api, method, params, signal, timeout: 10000 });
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new error('Solicitud cancelada');
    } else {
      throw await error;
    }
  } finally {
    abortController.abort();
  }

  return { ...response };
};
