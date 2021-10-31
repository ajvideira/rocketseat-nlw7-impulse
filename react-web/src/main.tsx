import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
