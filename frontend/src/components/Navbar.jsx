import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-800">
                SAMATA <span className="text-teal-600">Health</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-teal-600 transition duration-300 font-medium"
            >
              About
            </Link>
            <Link 
              to="/therapists" 
              className="text-gray-700 hover:text-teal-600 transition duration-300 font-medium"
            >
              Find Therapists
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-teal-600 transition duration-300 font-medium"
            >
              How It Works
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition duration-300 font-medium"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-300 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-300 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/therapists"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-300 font-medium"
              onClick={toggleMenu}
            >
              Find Therapists
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-300 font-medium"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <div className="pt-4 space-y-2">
              <Link
                to="/login"
                className="block px-3 py-2 text-center rounded-md text-teal-600 border border-teal-600 hover:bg-teal-50 transition duration-300 font-medium"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
