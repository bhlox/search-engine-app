import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultsContextProvider } from "./contexts/results-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultsContextProvider>
    <App />
  </ResultsContextProvider>
);
