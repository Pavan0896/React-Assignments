import { useEffect, useRef } from "react";

import "./App.css";
import UncontrolledComponent from "./UncontrolledComponent";
import ChangeColor from "./ChangeColor";

function App() {
  const inp = useRef(null);

  useEffect(() => {
    inp.current.focus();
  });

  return (
    <>
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "2%",
          paddingBottom: "4%",
          margin: "2%",
        }}
      >
        <h2 style={{ padding: "0" }}>Focusable Input Field</h2>
        <input type="text" ref={inp} />
      </div>
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "2%",
          paddingBottom: "4%",
          margin: "2%",
        }}
      >
        <h2>Updating useRef value on Real Time without using useState</h2>
        <UncontrolledComponent />
      </div>
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "2%",
          paddingBottom: "4%",
          margin: "2%",
        }}
      >
        <h2>Change Color</h2>
        <ChangeColor />
      </div>
    </>
  );
}

export default App;
