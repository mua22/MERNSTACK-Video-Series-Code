import React from "react";
const MyClickCounter = () => {
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const handleClick = (event) => {
    setCount(count + 1);
    // console.log("You Clicked Me " + count);
  };
  //   console.log("Count value before return: " + count);
  React.useEffect(() => {
    console.log("Count Changed");
  }, [count]);
  React.useEffect(() => {
    console.log("Show Changed");
  }, [show]);
  React.useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h2>Click Counter</h2>
      <div className="m-2 float-right">
        <button className="btn btn-info mx-2" onClick={handleClick}>
          Click Me
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={(e) => {
            setShow(!show);
          }}
        >
          Toggle Message
        </button>
      </div>
      {show && <div className="alert alert-info">My Message</div>}

      <div className="alert alert-danger">
        You have clicked me <b>{count}</b> times
      </div>
    </div>
  );
};

export default MyClickCounter;
