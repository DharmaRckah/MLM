import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About MLM Pro
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We're on a mission to empower entrepreneurs and transform lives
            through our innovative business model.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Our company story" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2015, MLM Pro began with a simple vision: create an
              opportunity where anyone, regardless of background or experience,
              could build a successful business and achieve financial freedom.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we've grown into a global community of passionate
              entrepreneurs who are changing lives through our revolutionary
              products and business opportunity.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-3 text-gray-600">
                  Industry-leading compensation plan
                </p>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-3 text-gray-600">
                  Science-backed, premium quality products
                </p>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-3 text-gray-600">
                  Comprehensive training and support system
                </p>
              </div>
              <div className="flex">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-3 text-gray-600">
                  Values-driven company culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;