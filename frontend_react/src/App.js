import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <div className="footer">
        <p>Copyright © 2022 KAI | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default App;
