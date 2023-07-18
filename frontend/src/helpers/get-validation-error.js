export const getValidationError = (errorCode, message) => {
  const CODE_MATCHER = {
    ERR_NETWORK: 'Hubo un error, intente nuevamente o comuniquese con soporte',
    ECONNABORTED: 'Hubo un error, intente nuevamente o comuniquese con soporte',
    ConnectionError: message || 'Hubo un error, intente nuevamente o comuniquese con soporte',
    ResourceNotFound: 'Hubo un error',
    NotFound: message || 'Producto no encontrado',
    InvalidItem: message || 'Producto no encontrado',
    UnauthorizedMethod: message || 'Metodo no authorizado',
  };

  return CODE_MATCHER[errorCode] || null;
};
