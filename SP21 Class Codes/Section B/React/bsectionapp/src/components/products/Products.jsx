import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const loadProducts = () => {
    setFetching(true);
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Ajax Request Complete");
        setFetching(false);
      });
  };
  React.useEffect(loadProducts, []);
  return (
    <div className="container">
      <h5>Showing Products {fetching && <span>Loading ...</span>}</h5>
      {fetching && <img src="/loader.gif" />}
      {products.map((product, index) => (
        <SingleProduct key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
