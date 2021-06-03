import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const ProductsForm = () => {
  const history = useHistory();
  const [name, setName] = React.useState("Lenovo");
  const [fetching, setFetching] = React.useState(false);
  const [product, setProduct] = React.useState({
    name: "Handcrafted Metal Ball",
    price: 429,
    color: "white",
    department: "Clothing",
    description: "The Football Is Good For Training And Recreational Purposes",
  });
  const addRecord = () => {
    setFetching(true);
    axios
      .post("https://usman-recipes.herokuapp.com/api/products", product)
      .then((res) => {
        console.log(res.data);
        setFetching(false);
        history.push("/products");
      });
  };
  //   console.log(product);
  return (
    <div>
      <h3>Add New Product</h3>
      <Link to="/products" className="btn btn-info">
        Back To Products
      </Link>

      <div className="container">
        <div className="form-group">
          <label htmlFor="">Product</label>
          <input
            type="text"
            className="form-control"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            type="text"
            className="form-control"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Color</label>
          <input
            type="text"
            className="form-control"
            value={product.color}
            onChange={(e) => {
              setProduct({ ...product, color: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Department</label>
          <input
            type="text"
            className="form-control"
            value={product.department}
            onChange={(e) => {
              setProduct({ ...product, department: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input
            type="text"
            className="form-control"
            value={product.description}
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
          />
        </div>
        <div className="form-group m-3">
          <button
            className="form-control btn-info"
            onClick={addRecord}
            disabled={fetching}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsForm;
