import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import VisionMission from './components/VisionMission/VisionMission';
import Team from './components/Team/Team';
import Members from './components/Members/Members';
import Magazine from './components/Magazine/Magazine';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/members" element={<Members />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
