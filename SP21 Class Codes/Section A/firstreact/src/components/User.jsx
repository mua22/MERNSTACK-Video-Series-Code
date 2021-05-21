import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div
      style={{
        overflow: "hidden",
        margin: 20,
        borderBottom: "1px dashed blue",
      }}
    >
      {props.showAvatar && <img src={props.avatar} className="avatar" />}

      <h2>Hello : {props.firstName}</h2>
      <p>Your Email: {props.email} has been verified</p>
      {props.showAvatar ? <p>Avatar</p> : <p>No Avatar</p>}
    </div>
  );
};

export default User;
