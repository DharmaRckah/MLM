import React from 'react';
import { UsersIcon, UserPlusIcon, ChevronRightIcon } from 'lucide-react';
const NetworkPage = () => {
  // Mock data for network members
  const frontlineMembers = [{
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rank: 'Silver Director',
    personalVolume: 1250,
    groupVolume: 12500,
    teamSize: 24,
    active: true
  }, {
    id: 2,
    name: 'Michael Rodriguez',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rank: 'Gold Director',
    personalVolume: 950,
    groupVolume: 18750,
    teamSize: 32,
    active: true
  }, {
    id: 3,
    name: 'Jennifer Wu',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rank: 'Team Leader',
    personalVolume: 850,
    groupVolume: 4200,
    teamSize: 8,
    active: true
  }, {
    id: 4,
    name: 'David Thompson',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rank: 'Associate',
    personalVolume: 450,
    groupVolume: 450,
    teamSize: 0,
    active: false
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Network</h1>
      {/* Network Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UsersIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Team Size
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      64 members
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserPlusIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Frontline Members
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      4 members
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                  <span className="text-xs font-bold">%</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Active Rate
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">75%</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-500">
                  <span className="text-xs font-bold">$</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Group Volume
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $35,900
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Organization Chart */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Organization Chart
          </h2>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Full Tree View
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="border-2 border-purple-600 rounded-lg p-4 mb-4 w-60 text-center bg-purple-50">
              <div className="flex justify-center mb-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Your profile" className="h-12 w-12 rounded-full" />
              </div>
              <div className="font-medium">Dharmendra (You)</div>
              <div className="text-sm text-purple-600">Managing Director</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {frontlineMembers.map(member => <div key={member.id} className="border rounded-lg p-4 w-full">
                  <div className="flex items-center mb-2">
                    <img src={member.image} alt={member.name} className="h-10 w-10 rounded-full" />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-xs text-purple-600">
                        {member.rank}
                      </div>
                    </div>
                    {member.active ? <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span> : <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Inactive
                      </span>}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <div className="text-gray-500">Personal Vol:</div>
                      <div className="font-medium">
                        ${member.personalVolume}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Group Vol:</div>
                      <div className="font-medium">${member.groupVolume}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Team Size: {member.teamSize} members
                  </div>
                  <button className="w-full flex justify-center items-center text-sm text-purple-600 hover:text-purple-800 mt-1">
                    View Downline
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      {/* Recruitment Tools */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Recruitment Tools
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5 bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">
                Personalized Website
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Share your unique website link with potential recruits.
              </p>
              <div className="flex items-center bg-white border rounded p-2 text-sm mb-3">
                <span className="text-gray-600 truncate flex-grow">
                  https://mlmpro.com/join/johndoe
                </span>
                <button className="ml-2 text-purple-600 hover:text-purple-800">
                  Copy
                </button>
              </div>
              <button className="text-sm text-purple-600 hover:text-purple-800">
                Customize Website
              </button>
            </div>
            <div className="border rounded-lg p-5 bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">
                Recruitment Videos
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Professional videos to share with prospects.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <span className="text-xs">1</span>
                  </div>
                  <span className="ml-2 text-sm">Business Overview (5:32)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <span className="text-xs">2</span>
                  </div>
                  <span className="ml-2 text-sm">Compensation Plan (8:14)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <span className="text-xs">3</span>
                  </div>
                  <span className="ml-2 text-sm">Success Stories (12:45)</span>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-5 bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">
                Digital Materials
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Download and share recruitment materials.
              </p>
              <div className="space-y-3">
                <button className="w-full py-2 px-4 border border-purple-600 rounded text-sm font-medium text-purple-600 hover:bg-purple-50">
                  Business Brochure (PDF)
                </button>
                <button className="w-full py-2 px-4 border border-purple-600 rounded text-sm font-medium text-purple-600 hover:bg-purple-50">
                  Compensation Plan (PDF)
                </button>
                <button className="w-full py-2 px-4 border border-purple-600 rounded text-sm font-medium text-purple-600 hover:bg-purple-50">
                  Product Catalog (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default NetworkPage;