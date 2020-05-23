import React from "react";
import "./productstyles.css";
const Product = ({ title, price, onAddToCart, count }) => {
  var priceClass = price <= 500 ? "orange" : "green";
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>{title}</h1>
      {count}
      <div className={priceClass}>
        <b>Price: </b> {price}
        <button
          onClick={() => {
            onAddToCart(title);
          }}
        >
          Add To Cart
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Product;
