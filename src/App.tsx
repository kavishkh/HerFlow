import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import EducationHub from './pages/EducationHub';
import AISupport from './pages/AISupport';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import FutureEnhancements from './pages/FutureEnhancements';
import CycleInfo from './pages/CycleInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 to-purple-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/education" element={<EducationHub />} />
            <Route path="/ai-support" element={<AISupport />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roadmap" element={<FutureEnhancements />} />
            <Route path="/cycle-info" element={<CycleInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;