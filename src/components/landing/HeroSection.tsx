import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const HeroSection = () => {
  return <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Transform Your Future With Our Revolutionary MLM Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Join thousands of successful partners building financial freedom
              with our proven business model and exceptional products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-purple-700 bg-white hover:bg-gray-100">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-purple-500">
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="People celebrating success" className="rounded-lg shadow-xl" />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-purple-200">Active Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold">95%</div>
            <div className="text-purple-200">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-purple-200">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold">$10M+</div>
            <div className="text-purple-200">Commissions Paid</div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;