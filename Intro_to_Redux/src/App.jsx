import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Count from "./Count";

function App() {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
        }}
      > 
        <div>
          <Count />
          <button onClick={() => dispatch({ type: "LIGHT" })}>Light</button>
          <button onClick={() => dispatch({ type: "DARK" })}>Dark</button>
        </div>
      </div>
    </>
  );
}

export default App;
