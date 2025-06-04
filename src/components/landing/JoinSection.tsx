import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
const benefits = ['Access to exclusive distributor pricing (25-40% off retail)', 'Ability to earn commissions on personal sales and team volume', 'Complete online training system and marketing tools', 'Personal distributor website for online sales', 'Mobile app to manage your business on the go', 'Weekly recognition and leadership development calls'];
const JoinSection = () => {
  return <section id="join" className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Change Your Future?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-100">
            Join thousands of successful distributors who are building financial
            freedom with MLM Pro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Distributor Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => <li key={index} className="flex">
                  <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="ml-3">{benefit}</span>
                </li>)}
            </ul>
            <div className="mt-10">
              <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-purple-700 bg-white hover:bg-gray-100">
                Join Now
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sign Up for More Information
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="join-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input type="text" id="join-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="join-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" id="join-email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="join-phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input type="tel" id="join-phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="referrer" className="block text-sm font-medium text-gray-700">
                  Referred By (Optional)
                </label>
                <input type="text" id="referrer" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Request Info Pack
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default JoinSection;