import React from "react";
import userService from "./../../services/UserService";
import { withRouter } from "react-router";
const Auth = (props) => {
  React.useEffect(() => {
    if (!userService.isLoggedIn()) {
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Auth);
