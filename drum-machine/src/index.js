import React from "react";
import ReactDOM from "react-dom/client";
import DrumMachine from "./components/drum-machine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);
