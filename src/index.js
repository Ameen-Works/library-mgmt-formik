import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root); // Create a root

reactRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
registerServiceWorker();
