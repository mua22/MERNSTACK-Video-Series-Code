const express = require("express");
const app = express();
app.use(express.json());
const products = ["Laptop", "LCD", "Mobile"];

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/search", function (req, res) {
  res.send("API Search");
});

//first parameter is url
//second is a function with two inputs one is request and one is response
app.get("/api/products", function (req, res) {
  res.send(products);
});
//get one resource
app.get("/api/products/:index", function (req, res) {
  if (!products[req.params.index])
    return res.status(400).send("Product not found");
  res.send(products[req.params.index]);
});
//update one resource with id e.g. index
app.put("/api/products/:index", function (req, res) {
  //   console.log(req.body);
  products[req.params.index] = req.body.name;
  res.send(products[req.params.index]);
});
//delete one resource
app.delete("/api/products/:index", function (req, res) {
  products.splice(req.params.index, 1);
  res.send(products);
});
//create one resource
app.post("/api/products", function (req, res) {
  products.push(req.body.name);
  res.send(products);
});

app.listen(3000);
