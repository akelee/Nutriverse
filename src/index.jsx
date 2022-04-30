import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <App />
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donkeys" element={<Donkeys />} />
      </Routes>
    </HashRouter> */}
  </React.StrictMode>
);
