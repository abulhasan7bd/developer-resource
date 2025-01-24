import React from "react";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Template from "./Pages/Template/Template";
import Animate from "./Pages/Animate/Animate";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Template />
      <Animate/>
    </div>
  );
};

export default App;
