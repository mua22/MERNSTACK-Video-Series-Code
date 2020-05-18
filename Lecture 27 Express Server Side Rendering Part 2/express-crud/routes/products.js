var express = require("express");
var router = express.Router();
var Product = require("../models/product");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  console.log(products);
  res.render("products/list", { title: "Products In DB", products });
});
router.get("/add", async function (req, res, next) {
  res.render("products/add");
});
// store data in db
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});
router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});

module.exports = router;
