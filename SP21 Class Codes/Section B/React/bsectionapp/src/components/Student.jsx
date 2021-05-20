import React from "react";

const Student = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello: {props.name}</h1>
      <button
        className="btn btn-info btn-sm"
        onClick={() => {
          props.onSubmitAssignment(props.name);
        }}
      >
        Submit Assignment
      </button>
    </div>
  );
};

export default Student;
