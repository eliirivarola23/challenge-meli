export const getValidationError = (errorCode) => {
  const CODE_MATCHER = {
    ERR_NETWORK: "Se rompió la red",
    ERR_NAME_NOT_RESOLVED: 'TOdo mal'
  };

  return CODE_MATCHER[errorCode];
};
