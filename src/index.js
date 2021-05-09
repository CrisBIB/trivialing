import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.scss";
import "./Styles/index.scss";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
