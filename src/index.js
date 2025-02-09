import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="header">
      <h1>🍴Eat and Split</h1>
      <p>
        A handy bill-splitting tool that helps users quickly calculate dining
        expenses. 💰
      </p>
    </div>

    <App />
  </React.StrictMode>
);
