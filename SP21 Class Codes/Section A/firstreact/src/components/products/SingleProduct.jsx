import React from "react";
const SingleProduct = ({ product, deleteRecord, fetching }) => {
  return (
    <div className="m-2 p-2 border-bottom">
      <h4>{product.name}</h4>
      <button
        className="btn btn-danger"
        disabled={fetching}
        onClick={(e) => {
          deleteRecord(product._id);
        }}
      >
        Delete
      </button>
      <div className="row">
        <div className="col-4">Price: {product.price}</div>
        <div className="col-4">Color: {product.color}</div>
        <div className="col-4">Department: {product.department}</div>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
