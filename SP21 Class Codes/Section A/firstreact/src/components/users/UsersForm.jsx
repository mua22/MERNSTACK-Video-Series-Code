import React from "react";
import SpecialEmail from "./SpecielEmail";

const UsersForm = () => {
  const [email, setEmail] = React.useState("usman.akram@gmail.com");
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>Users Form</h1>
      <div className="form-group">
        <div className="form-label">Email</div>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={emailChanged}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-info"
          onClick={(e) => {
            console.log("Send Save Request");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UsersForm;
