import React from "react";

const SingleProduct = (props) => {
  const product = props.product;
  const { name, description } = product;
  console.log(props);
  return (
    <div className="m-2-p-2">
      <h3>{name}</h3>
      <p className="p-3">{description}</p>
    </div>
  );
};

export default SingleProduct;
