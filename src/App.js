import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currindex, setCurrindex] = useState(0);
  const countries = [
    { name: "Mex", desc: "bad" },
    { name: "Gon", desc: "bad" },
  ];

  return (
    <div className="container">
      <Header setCurrindex={setCurrindex} />
      <Content countries={countries} index={currindex} />
      <p>Content of the web page goes here.</p>
      <Content />
      <Footer />
    </div>
  );
};

export default App;
