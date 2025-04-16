import React from "react";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
    </>
  );
};

export default App;
