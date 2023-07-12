const express = require("express");
const router = express.Router();
const products = require("../apiServices/products/routes");

router.use("/items", products);

module.exports = router;
