import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";
import PlanPage from "./components/Pages/PlanPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <HeroSection />
        <BodyPage />
      </div>
      <PlanPage/>
    </div>
  );
};

export default App;
