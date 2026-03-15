import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";
import PlanPage from "./components/Pages/PlanPage";
import ServicePage from "./components/Pages/ServicePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <HeroSection />
        <BodyPage />
      </div>
      <PlanPage/>
      <div>
        <ServicePage/>
      </div>
    </div>
  );
};

export default App;
