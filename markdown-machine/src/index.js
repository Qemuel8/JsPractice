import React from "react";
import ReactDOM from "react-dom/client";
import Markdown from "./components/markdown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Markdown />
  </React.StrictMode>
);
