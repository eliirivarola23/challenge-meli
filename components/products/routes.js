const express = require('express');
const { getListProducts, getDetailProduct } = require('./controller');
const { error404Handler } = require('../../middleware/errors');
const router = express.Router();


router.get('/search', getListProducts);
router.get('/:id', getDetailProduct);

module.exports = router;
