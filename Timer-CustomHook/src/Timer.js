import { useRef } from "react";
import { useState } from "react";

const useTimer = (time = 10) => {
  const [timer, setTimer] = useState(time);
  const id = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  if(timer<=0) {
    clearInterval(id.current);
    setTimer("Time is up!!!");
    setIsRunning(false);
  }

  const startTimer = () => {
    if (id.current) {
      setIsRunning(true);
      clearInterval(id.current);
    }
    if (timer > 0) {
      id.current = setInterval(() => {
        setTimer((prev) => prev - 1);
        setIsRunning(true);
      }, 1000);
    } 
  };

  const stopTimer = () => {
    clearInterval(id.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(time);
    setIsRunning(false);
  };

  return [timer, startTimer, stopTimer, resetTimer, isRunning];
};

export default useTimer;
