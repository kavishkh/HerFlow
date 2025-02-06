import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                HerFlow
              </span>
            </Link>
            <p className="text-gray-600">
              Empowering menstrual wellness through technology and education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-rose-500">Discharge Monitor</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-rose-500">AI Mood Support</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-rose-500">Symptom Tracker</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-rose-500">PCOS Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/education" className="text-gray-600 hover:text-rose-500">Education Hub</Link></li>
              <li><Link to="/ai-support" className="text-gray-600 hover:text-rose-500">AI Chat Support</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-rose-500">Shop</Link></li>
              <li><Link to="/roadmap" className="text-gray-600 hover:text-rose-500">Future Updates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-500">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} HerFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;