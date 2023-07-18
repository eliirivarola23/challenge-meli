const { default: axios } = require('axios');
const { validationError } = require('../middleware/validations');

const callApi = async ({ apiBaseUrl, url, params, method = 'get' }) => {
  try {
    const response = await axios({ url: `${apiBaseUrl}${url}`, method, params, timeout: 5000 });

    return response;
  } catch (error) {
    const errorCode = error.response?.data?.error || error.cause?.code || error.code;
    const newErrors = validationError(errorCode);
    throw await newErrors;
  }
};

module.exports = callApi;
