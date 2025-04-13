import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import UpcomingContest from './components/UpcomingContest'; 
import AllContest from './components/AllContest';
import FourthPage from './components/FourthPage'; // ✅ import added

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <UpcomingContest />  
      <div className="page-wrapper">
        <AllContest />
        <FourthPage /> {/* ✅ added here */}
      </div>
    </div>
  );
}

export default App;