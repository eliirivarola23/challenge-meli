const { NotFound, ResourceNotFound, InvalidItem, UnauthorizedMethod, ConnectionError } = require('./errors');

module.exports = {
  validationError: error => {
    if (['ETIMEDOUT', 'ENOTFOUND', 'EPROTO', 'ECONNABORTED'].includes(error)) throw new ConnectionError();
    if ('resource not found' === error) throw new ResourceNotFound();
    if ('not_found' === error) throw new NotFound();
    if ('Invalid item id' === error) throw new InvalidItem();
    if ('forbidden' === error) throw new UnauthorizedMethod();
  },
};
