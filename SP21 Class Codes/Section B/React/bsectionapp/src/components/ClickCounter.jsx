import React from "react";

const ClickCounter = () => {
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const clickHandler = (event) => {
    // console.log("Button clicked");
    setCount(count + 1);
  };
  // console.log("count value in component = " + count);
  React.useEffect(() => {
    console.log("Use Effect Called");
  }, [count, show]);
  return (
    <div className="p-4">
      <button className="btn btn-info" onClick={clickHandler}>
        Click Me
      </button>
      <button
        className="btn btn-info"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Toggle Alert
      </button>
      <p>I am counting CLicks to: {count}</p>
      {show && <div className="alert alert-info">I Am showing</div>}
    </div>
  );
};

export default ClickCounter;
