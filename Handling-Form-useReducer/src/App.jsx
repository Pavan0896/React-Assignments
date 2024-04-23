import { useReducer, useState } from "react";

import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "SUBMIT":
        if (state.email || state.password != "") {
          return { ...state, isPresent: true};
        } else{
          return {...state, isPresent:false}
        }
      case "RESET":
        return { email: "", password: "", isPresent: false };
      default:
        throw new Error("invalid action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    isPresent: false,
  });

  return (
    <>
      <input
        type="text"
        value={state.email}
        placeholder="enter email"
        onInput={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
      />
      <input
        type="password"
        value={state.password}
        placeholder="enter password"
        onInput={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "SUBMIT" })}>Submit</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      {state.isPresent ? (
        <div>
          <div>email: {state.email}</div>
          <div>password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </>
  );
}

export default App;
