const createErrorCustom = name => {
  return class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = name;
      this.statusCode = statusCode;
    }
  };
};

const ConnectionError = createErrorCustom('ConnectionError');
const ResourceNotFound = createErrorCustom('ResourceNotFound');
const NotFound = createErrorCustom('NotFound');
const InvalidItem = createErrorCustom('InvalidItem');
const UnauthorizedMethod = createErrorCustom('UnauthorizedMethod');

const ERROR_HANDLER = {
  ConnectionError: { error: 'ConnectionError', status: 500, message: 'Hubo un error intente nuevamente o comunicate con soporte' },
  ResourceNotFound: { error: 'ResourceNotFound', status: 400, message: 'La solicitud que intenta realizar no es correcta' },
  NotFound: { error: 'NotFound', status: 404, message: 'El producto no se ha encontrado' },
  InvalidItem: { error: 'InvalidItem', status: 404, message: 'Id invalido' },
  UnauthorizedMethod: { error: 'UnauthorizedMethod', status: 403, message: 'Metodo no authorizado' },
};

const error404Handler = (req, res, next, route) => {

  if (!req.path.startsWith(route)) {
    return res.status(ERROR_HANDLER.ResourceNotFound.status).send(ERROR_HANDLER.ResourceNotFound.message);
  }
  next();
};

module.exports = { ERROR_HANDLER, error404Handler, ConnectionError, ResourceNotFound, NotFound, NotFound, InvalidItem, UnauthorizedMethod };
