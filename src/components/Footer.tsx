import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-purple-600 rounded-full"></div>
              <span className="ml-2 text-xl font-bold text-white">MLM Pro</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Transforming lives through our revolutionary MLM business
              opportunity and high-quality products.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-white text-sm">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-white text-sm">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#income" className="text-gray-300 hover:text-white text-sm">
                  Income Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} MLM Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;