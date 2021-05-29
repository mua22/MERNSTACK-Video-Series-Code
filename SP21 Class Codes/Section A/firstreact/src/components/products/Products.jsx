import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const loadProducts = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  };
  useEffect(loadProducts, []);
  const deleteRecord = (id) => {
    setFetching(true);
    axios
      .delete("https://usman-recipes.herokuapp.com/api/products/" + id)
      .then((res) => {
        console.log("deleted");
        loadProducts();
        setFetching(false);
      });
  };
  return (
    <div className="container">
      <h5>Products</h5>
      <Link to="/products/add" className="btn btn-info">
        Add New Product
      </Link>
      {products.map((product, index) => (
        <SingleProduct
          product={product}
          key={index}
          fetching={fetching}
          deleteRecord={deleteRecord}
        />
      ))}
    </div>
  );
};

export default Products;
