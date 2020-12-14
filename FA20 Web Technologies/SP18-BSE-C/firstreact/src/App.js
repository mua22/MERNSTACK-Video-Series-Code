import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = React.useState([
    // { title: "Dummy Product", price: 500 },
  ]);
  React.useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:4000/api/products").then((res) => {
        setProducts(res.data);
      });
    }, 1);
  }, []);
  return (
    <div className="App">
      <h1>All Products</h1>
      {products.map((p, index) => (
        <div>
          <h2>{p.title}</h2>
          <h6>{p.price}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
