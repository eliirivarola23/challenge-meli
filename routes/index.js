const express = require('express');
const router = express.Router();
const products = require('../components/products/routes');
const { error404Handler } = require('../middleware/errors');

router.use((req, res, next) => error404Handler(req, res, next, '/items'));
router.use('/items', products);
module.exports = router;
