import React from 'react';
import { TrendingUpIcon, UsersIcon, DollarSignIcon, AwardIcon, HeartIcon, ShieldIcon } from 'lucide-react';
const features = [{
  name: 'Lucrative Compensation',
  description: 'Our multi-tiered commission structure rewards you at every level of business growth.',
  icon: DollarSignIcon
}, {
  name: 'Proven Business Model',
  description: 'A time-tested system that has created thousands of success stories across the globe.',
  icon: TrendingUpIcon
}, {
  name: 'Team Building Tools',
  description: 'Advanced tools and resources to help you build and manage a successful downline.',
  icon: UsersIcon
}, {
  name: 'Premium Products',
  description: 'High-quality, exclusive products that customers love and distributors are proud to represent.',
  icon: AwardIcon
}, {
  name: 'Supportive Community',
  description: 'Join a network of like-minded entrepreneurs who are committed to helping each other succeed.',
  icon: HeartIcon
}, {
  name: 'Stable & Ethical Company',
  description: 'Partner with a financially sound company that values integrity and ethical business practices.',
  icon: ShieldIcon
}];
const FeaturesSection = () => {
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose MLM Pro?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide everything you need to build a successful MLM business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-md bg-purple-600 text-white flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;