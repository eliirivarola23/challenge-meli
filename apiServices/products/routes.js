const express = require("express");
const { getListProducts, getDetailProduct } = require("./controller");
const router = express.Router();

router.get("/search", getListProducts);
router.get("/:id", getDetailProduct);

module.exports = router;
