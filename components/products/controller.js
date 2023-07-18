const { default: axios } = require('axios');
const { resultApiMercadoLibre, detailProductApiMercadoLibre } = require('../../config/mercado_libre');
const callApi = require('../../services/api.services');
const { dataAdapterResults, dataAdapterDetail } = require('./adapters/dataAdapter');
const { ERROR_HANDLER } = require('../../middleware/errors');

const author = { author: { name: 'Eli', lastName: 'rivarola' } };

module.exports = {
  async getListProducts(req, res) {
    try {
      const response = await callApi({ apiBaseUrl: resultApiMercadoLibre, url: 'search', params: req.query });

      res.json({ ...author, ...dataAdapterResults(response) });
    } catch (error) {
      if (ERROR_HANDLER[error]) {
        const { status, ...newErrors } = ERROR_HANDLER[error];
        if (ERROR_HANDLER[error]) res.status(status).json(newErrors);
      }
    }
  },

  async getDetailProduct(req, res) {
    let responseOfDescription = {};
    try {
      responseOfDescription = await axios({ url: `${detailProductApiMercadoLibre}${req.params.id}/description`, method: 'get' });
    } catch (error) {}

    try {
      const response = await callApi({ apiBaseUrl: detailProductApiMercadoLibre, url: req.params.id });

      res.json({ ...author, ...dataAdapterDetail({ response, responseOfDescription }) });
    } catch (error) {
      if (ERROR_HANDLER[error]) {
        const { status, ...messageError } = ERROR_HANDLER[error];
        if (ERROR_HANDLER[error]) res.status(status).json(messageError);
      }
    }
  },
};
