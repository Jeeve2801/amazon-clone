import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import Sample from "./Sample";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
