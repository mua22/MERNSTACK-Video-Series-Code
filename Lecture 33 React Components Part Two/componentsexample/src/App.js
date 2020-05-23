import React from "react";

import Product from "./components/Product";
import Counter from "./components/Counter";
const handleAddToCartClick = (title) => {
  alert("Add TO Cart Clicked for " + title);
};
function App() {
  const [count, setCount] = React.useState(5);
  const handleIncrement = () => {
    console.log("increment called");
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "aqua" }}>Components Example</h1>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Product
        title="Audi"
        price="400"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
      <Product
        title="Civic"
        price="600"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
      <Product
        price="500"
        title="Suzuki"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
    </div>
  );
}
export default App;
