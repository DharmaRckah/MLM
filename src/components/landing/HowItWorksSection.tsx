import React from 'react';
const steps = [{
  number: '01',
  title: 'Sign Up',
  description: 'Register as a distributor with a starter kit that includes everything you need to begin your business journey.'
}, {
  number: '02',
  title: 'Learn & Train',
  description: 'Access our comprehensive training materials and participate in live webinars to master product knowledge and business strategies.'
}, {
  number: '03',
  title: 'Share & Sell',
  description: 'Introduce our premium products to your network and earn commissions on every sale you make.'
}, {
  number: '04',
  title: 'Build Your Team',
  description: 'Recruit and mentor others to join your team, expanding your business and increasing your earning potential.'
}];
const HowItWorksSection = () => {
  return <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Four simple steps to start your journey to financial freedom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="relative">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 mx-auto">
                <span className="text-purple-700 font-bold text-xl">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-100 transform -translate-x-8"></div>}
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#join" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;