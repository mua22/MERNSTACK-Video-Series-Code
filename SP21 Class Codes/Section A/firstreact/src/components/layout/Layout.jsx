import React from "react";
import MyNavBar from "./MyNavBar";

const Layout = (props) => {
  console.log(props);
  return (
    <div id="layout">
      <MyNavBar />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
