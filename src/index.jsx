// eslint-disable-next-line
import React, { Component } from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoPage from "./pages/nopage";
import Test from "./pages/test";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />;
  </React.StrictMode>
);

// export default function App() {
//   return (
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/test" element={<Test />} />
//           <Route path="*" element={<NoPage />} />
//         </Routes>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
