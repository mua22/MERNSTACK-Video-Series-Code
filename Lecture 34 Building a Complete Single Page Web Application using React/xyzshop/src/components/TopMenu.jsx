import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const TopMenu = () => {
  return (
    <div>
      <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/">Home</Link>
        </li>

        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/products">Products</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Button varinat="contained" color="secondary">
            Signup
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
