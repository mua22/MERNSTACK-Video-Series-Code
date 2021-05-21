import React from "react";

const Student = (props) => {
  // console.log(props);
  const showButton = false;
  const feeDeposited = false;
  const friends = ["ABC", "XYZ", "DEF"];
  return (
    <div>
      <h1>Hello: {props.name}</h1>
      {showButton && <h2>Conditional Render</h2>}
      {feeDeposited ? <h3>Fee is Deposited</h3> : <h3>Fee is Not Deposited</h3>}
      <button
        className="btn btn-info btn-sm"
        onClick={() => {
          props.onSubmitAssignment(props.name);
        }}
      >
        Submit Assignment
      </button>

      {friends.map((friend, index) => (
        <h5 key={index}>{friend}</h5>
      ))}
    </div>
  );
};

export default Student;
