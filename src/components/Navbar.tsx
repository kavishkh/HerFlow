import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                HerFlow
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-rose-500 transition">Features</Link>
            <Link to="/education" className="text-gray-700 hover:text-rose-500 transition">Education Hub</Link>
            <Link to="/ai-support" className="text-gray-700 hover:text-rose-500 transition">AI Support</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-rose-500 transition">Shop</Link>
            <Link to="/cycle-info" className="text-gray-700 hover:text-rose-500 transition">Track Cycle</Link>
            <Link to="/roadmap" className="text-gray-700 hover:text-rose-500 transition">Roadmap</Link>
            <Link to="/dashboard" className="flex items-center px-4 py-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition">
              <User className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Features</Link>
            <Link to="/education" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Education Hub</Link>
            <Link to="/ai-support" className="block px-3 py-2 text-gray-700 hover:text-rose-500">AI Support</Link>
            <Link to="/marketplace" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Shop</Link>
            <Link to="/cycle-info" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Track Cycle</Link>
            <Link to="/roadmap" className="block px-3 py-2 text-gray-700 hover:text-rose-500">Roadmap</Link>
            <Link to="/dashboard" className="block px-3 py-2 text-rose-500 font-medium">Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;