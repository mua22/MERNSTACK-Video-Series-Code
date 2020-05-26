import React from "react";
import userService from "../../services/UserService";
import { withRouter } from "react-router";
const Admin = (props) => {
  React.useEffect(() => {
    if (!userService.isAdmin()) {
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Admin);
