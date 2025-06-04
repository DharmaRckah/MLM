import React from 'react';
const teamMembers = [{
  name: 'Robert Johnson',
  role: 'CEO & Founder',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  bio: '25+ years experience in direct sales and business development.'
}, {
  name: 'Amanda Chen',
  role: 'Chief Marketing Officer',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  bio: 'Former VP of Marketing at Fortune 500 companies.'
}, {
  name: 'David Williams',
  role: 'Director of Distributor Development',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  bio: 'Built a network of over 50,000 distributors globally.'
}, {
  name: 'Sarah Thompson',
  role: 'Product Development Director',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  bio: 'PhD in Biochemistry with expertise in wellness formulations.'
}];
const TeamSection = () => {
  return <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leadership Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the experienced professionals behind MLM Pro's success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="text-center">
              <div className="relative">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto rounded-full object-cover" />
                <div className="absolute inset-0 rounded-full ring-4 ring-purple-600 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Winning Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our leadership team is committed to providing you with the tools,
            training, and support you need to build a successful MLM business.
          </p>
          <a href="#join" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>;
};
export default TeamSection;