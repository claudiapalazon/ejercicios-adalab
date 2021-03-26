// Este es el archivo desde el que comienza a pintarse la web. Recoge el div "Root", donde pintará lo que queremos.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
