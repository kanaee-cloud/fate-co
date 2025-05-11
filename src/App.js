import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Banner from "./components/Banner";
import AuroraBackground from "./components/Background/AuroraBackground";

const App = () => {
  return (
    <Router>
      <div className="aurora-bg relative h-screen overflow-hidden">
        <div className="aurora-layer"></div>
     
        {/* <div className="absolute inset-0 bg-indigo-950"></div>
        <div className="absolute left-1/4 right-1/4 top-1/3 bottom-1/3 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-600/20 via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-indigo-950/80 via-indigo-950/50 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-indigo-950/90 via-indigo-950/50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-indigo-950/90 via-indigo-950/50 to-transparent"></div> */}
        <div className="relative  max-w-[1120px] mx-auto h-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 font-primary py-10">
            <Sidebar />
          <div className="flex-1 glassmorphism rounded-2xl py-6 px-8 text-white w-full h-full scroll-container overflow-y-auto">
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
