var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
