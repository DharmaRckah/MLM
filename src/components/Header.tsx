import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-purple-600 rounded-full"></div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                MLM Pro
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Home
            </Link>
            <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              About
            </a>
            <a href="#products" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Products
            </a>
            <a href="#compensation" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Compensation Plan
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <Link to="/login" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">
              Home
            </Link>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">
              About
            </a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">
              Products
            </a>
            <a href="#compensation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">
              Compensation Plan
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50">
              Contact
            </a>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Login
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;