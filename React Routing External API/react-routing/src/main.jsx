import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FetchContext } from "./FetchAPIContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FetchContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FetchContext>
  </React.StrictMode>
);
