import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <HeroSection />
        <BodyPage />
      </div>
    </div>
  );
};

export default App;
