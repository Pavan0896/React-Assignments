import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [num, setNum] = useState(0);
  const timerRef = useRef(null);
  console.log("App");

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const memoizedStart = useCallback(() => {
    setIsRunning(true);
  }, [isRunning]);

  const memoizedStop = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  }, [isRunning]);

  const memoizedReset = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
    }
    setTimer(0);
    if (timerRef.current) {
      memoizedStop();
    }
  }, [isRunning]);

  const memoizedIncrementHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const memoizedDecrementHandler = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const expensiveFunction = useMemo(() => {
    console.log("Expensive function");
    let res = 0;
    for (let i = 0; i < num * 100000000; i++) {
      res += i;
    }
    return res;
  }, [num]);

  return (
    <>
      <Counter
        incrementHandler={memoizedIncrementHandler}
        decrementHandler={memoizedDecrementHandler}
        count={count}
      />
      <Timer
        timer={timer}
        start={memoizedStart}
        stop={memoizedStop}
        pause={memoizedReset}
      />
      <h3>useMemo Example</h3>
      <p>{num}</p>
      <p>Result of expensiveFunction : {expensiveFunction}</p>
      <button onClick={() => setNum(num + 1)}>Increase num</button>
    </>
  );
}

export default App;
