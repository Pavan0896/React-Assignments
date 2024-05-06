import React from "react";

const Counter = ({ incrementHandler, decrementHandler, count }) => {
  console.log("Counter");
  return (
    <>
      <div>
        <h3>React.memo Example</h3>
        {count}
        <br />
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );
};

export default React.memo(Counter);
