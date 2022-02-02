import React from "react";

import Header from "./Layout/Header/Header";

import Home from "./pages/Home/Home";

import "./generic.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
