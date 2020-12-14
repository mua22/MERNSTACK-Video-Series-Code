var express = require("express");
var router = express.Router();
var Product = require("../../models/ProductModel");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  res.send(products);
});

module.exports = router;
