import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
const ProductsForm = () => {
  const [fetching, setFetching] = React.useState(false);
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    name: "Cultus",
    price: 50,
    color: "red",
    department: "PaintJob",
    description: "My desc",
  });
  const [name, setName] = React.useState("Alto");
  const addRecord = () => {
    setFetching(true);
    axios
      .post("https://usman-recipes.herokuapp.com/api/products", formData)
      .then((res) => {
        console.log(res.data);
        setFetching(false);
        history.push("/products");
      });
  };
  console.log(formData);
  return (
    <div className="container">
      <h5>Add New Product</h5>

      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          disabled={fetching}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Price</label>
        <input
          type="text"
          disabled={fetching}
          className="form-control"
          value={formData.price}
          onChange={(e) => {
            setFormData({ ...formData, price: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Color</label>
        <input
          type="text"
          disabled={fetching}
          className="form-control"
          value={formData.color}
          onChange={(e) => {
            setFormData({ ...formData, color: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Department</label>
        <input
          type="text"
          disabled={fetching}
          className="form-control"
          value={formData.department}
          onChange={(e) => {
            setFormData({ ...formData, department: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Description</label>
        <textarea
          type="text"
          disabled={fetching}
          className="form-control"
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
      </div>
      <button className="btn btn-info" onClick={addRecord} disabled={fetching}>
        Add New Record
      </button>
    </div>
  );
};

export default ProductsForm;
