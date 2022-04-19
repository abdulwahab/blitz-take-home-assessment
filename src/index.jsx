import React from "react";
import { setup } from "goober";
import ReactDOM from "react-dom";

import GlobalStyles from "./styles";
import App from "./App";

setup(React.createElement);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
