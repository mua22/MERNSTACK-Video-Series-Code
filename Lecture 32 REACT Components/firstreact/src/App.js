import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";
function App() {
  return (
    <div className="container">
      <h1>Hello From React Component</h1>
      <Button variant="primary">Bootstrap Button</Button>
      <Button variant="secondary">Bootstrap Button</Button>
      <Alert variant="success">My Alert</Alert>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi
        saepe libero et minima officia voluptatibus dicta labore error, nihil
        aperiam necessitatibus doloribus debitis illo quos eum quas sint harum.
      </p>
    </div>
  );
}
export default App;
