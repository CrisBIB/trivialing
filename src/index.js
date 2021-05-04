import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styles/index.scss";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
