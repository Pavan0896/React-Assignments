import React from "react";

const Timer = ({ timer, start, stop, pause }) => {
  console.log("Timer");
  return (
    <div>
      <>
        <h3>useCallback example</h3>
        <h4>{timer}</h4>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={pause}>Reset</button>
      </>
    </div>
  );
};

export default React.memo(Timer);
