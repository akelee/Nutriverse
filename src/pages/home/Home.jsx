import React from "react";
import { Footer, Header, WhatNutriverse } from "../../containers";
import { Brand, Navbar } from "../../components";
import { Route, Link } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <WhatNutriverse />
      <Brand />
    </div>
  );
}

export default Home;
