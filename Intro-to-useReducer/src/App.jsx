import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, value: state.value + 1 };
      case "SUBTRACT":
        return { ...state, value: state.value - 1 };
      case "TOGGLE":
        return { ...state, theme: !state.theme };
      default:
        throw new Error("Invalid");
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 0, theme: false });
  return (
      <div
        style={{
          backgroundColor: state.theme ? "white" : "#242424",
          color: state.theme ? "#242424" : "white",
          width:"100%",
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <h1>{state.value}</h1> <br />
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "TOGGLE" })}>
          Toggle Theme
        </button>
      </div>
  );
}

export default App;
