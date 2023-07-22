import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <p>Content of the web page goes here.</p>
      <Content />
      <Footer />
    </div>
  );
};

export default App;
