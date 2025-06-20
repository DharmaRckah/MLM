import React from 'react';
import { DollarSignIcon, UsersIcon, BarChartIcon, GiftIcon, AwardIcon } from 'lucide-react';
const compensationMethods = [{
  name: 'Retail Profits',
  description: 'Earn up to 40% commission on all personal product sales to customers.',
  icon: DollarSignIcon
}, {
  name: 'Team Commissions',
  description: 'Earn 5-15% on the sales volume generated by your entire downline organization.',
  icon: UsersIcon
}, {
  name: 'Rank Advancement Bonuses',
  description: 'Receive special one-time bonuses as you advance through our leadership ranks.',
  icon: BarChartIcon
}, {
  name: 'Lifestyle Rewards',
  description: 'Qualify for luxury trips, car allowances, and other exclusive lifestyle perks.',
  icon: GiftIcon
}, {
  name: 'Leadership Pools',
  description: 'Top performers share in special bonus pools allocated from company-wide sales.',
  icon: AwardIcon
}];
const CompensationPlanSection = () => {
  return <section id="compensation" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compensation Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our industry-leading compensation plan offers multiple ways to earn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compensationMethods.map((method, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {method.name}
              </h3>
              <p className="text-gray-600">{method.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-purple-700 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Learn More About Our Compensation Plan?
            </h3>
            <p className="text-purple-100 mb-8 max-w-3xl mx-auto">
              Download our detailed compensation plan document or schedule a
              call with one of our business development specialists to see how
              you can maximize your earnings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-gray-100">
                Download Full Plan
              </button>
              <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-purple-600">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CompensationPlanSection;