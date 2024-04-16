import { useContext } from "react";

import "./App.css";
import { themeContext } from "./Context/ThemeContext";
import { userContext } from "./Context/UserContext";

function App() {
  const flag = useContext(themeContext);
  const auth = useContext(userContext);

  return (
    <>
      <div id="outer"
        style={{
          backgroundColor: flag.flag ? "black" : "white",
          color: flag.flag ? "white" : "black",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div id="inner">
          <button onClick={() => auth.setAuth(!auth.auth)}>
            Toggle Authentication
          </button>
          {auth.auth ? <button>Logout</button> : <button>Login</button>}
        </div>
        
        <div id="inner1">
        <p>
          ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum iusto debitis repudiandae eligendi delectus, tempora
          possimus id sed alias minus ab aliquid architecto adipisci vitae saepe
          accusantium necessitatibus cumque. Quasi.
        </p>
        <button onClick={() => flag.setFlag(!flag.flag)}>Toggle theme</button>
        </div>
      </div>
    </>
  );
}

export default App;
