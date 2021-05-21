import React from "react";
import NavBar from "./NavBAr";

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <hr />
    </div>
  );
};

export default Layout;
