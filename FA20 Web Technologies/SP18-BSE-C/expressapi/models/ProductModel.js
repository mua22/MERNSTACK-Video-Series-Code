const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

const Model = mongoose.model("Product", modelSchema);
module.exports = Model;
