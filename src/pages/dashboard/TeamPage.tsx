import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ChevronDownIcon, UserPlusIcon, UsersIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // Mock data for team members
  const teamMembers = [{
    id: 1,
    name: 'Sarah Johnson',
    rank: 'Silver Director',
    joinDate: '2022-03-15',
    personalVolume: 1250,
    groupVolume: 12500,
    teamSize: 24,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 2,
    name: 'Michael Rodriguez',
    rank: 'Gold Director',
    joinDate: '2021-08-10',
    personalVolume: 950,
    groupVolume: 18750,
    teamSize: 32,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 3,
    name: 'Jennifer Wu',
    rank: 'Team Leader',
    joinDate: '2022-06-22',
    personalVolume: 850,
    groupVolume: 4200,
    teamSize: 8,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 4,
    name: 'David Thompson',
    rank: 'Associate',
    joinDate: '2023-01-05',
    personalVolume: 450,
    groupVolume: 450,
    teamSize: 0,
    status: 'Inactive',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 5,
    name: 'Lisa Garcia',
    rank: 'Senior Associate',
    joinDate: '2022-11-12',
    personalVolume: 650,
    groupVolume: 1200,
    teamSize: 3,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Team Performance
      </h1>
      {/* Team Stats */}
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
                      67 members
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
                <TrendingUpIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Monthly Group Volume
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $37,100
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
                    New Recruits (MTD)
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      8 members
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
                <AwardIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Active Rate
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">82%</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Navigation */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 pt-5 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === 'overview' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('overview')}>
              Team Overview
            </button>
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === 'members' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('members')}>
              Team Members
            </button>
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === 'structure' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('structure')}>
              Team Structure
            </button>
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'rankings' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('rankings')}>
              Rankings & Recognition
            </button>
          </div>
        </div>
        <div className="p-6">
          {/* Team Overview Tab */}
          {activeTab === 'overview' && <div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Performance Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Team Growth Chart */}
                  <div className="bg-white border rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900">
                        Team Growth
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="h-64 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <div className="text-center">
                          <p className="text-gray-500">Team Growth Chart</p>
                          <p className="text-sm text-gray-400">
                            (Chart would display here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Volume Trends Chart */}
                  <div className="bg-white border rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900">
                        Volume Trends
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="h-64 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <div className="text-center">
                          <p className="text-gray-500">Volume Trends Chart</p>
                          <p className="text-sm text-gray-400">
                            (Chart would display here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Team Composition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Rank Distribution */}
                  <div className="bg-white border rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900">
                        Rank Distribution
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="h-48 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <div className="text-center">
                          <p className="text-gray-500">
                            Rank Distribution Chart
                          </p>
                          <p className="text-sm text-gray-400">
                            (Chart would display here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Activity Status */}
                  <div className="bg-white border rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900">
                        Activity Status
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="h-48 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <div className="text-center">
                          <p className="text-gray-500">Activity Status Chart</p>
                          <p className="text-sm text-gray-400">
                            (Chart would display here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Team Tenure */}
                  <div className="bg-white border rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900">
                        Team Tenure
                      </h4>
                    </div>
                    <div className="p-4">
                      <div className="h-48 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                        <div className="text-center">
                          <p className="text-gray-500">Team Tenure Chart</p>
                          <p className="text-sm text-gray-400">
                            (Chart would display here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Top Performers
                </h3>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Member
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rank
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Personal Volume
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Group Volume
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Team Size
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {teamMembers.slice(0, 3).map(member => <tr key={member.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img className="h-10 w-10 rounded-full object-cover" src={member.image} alt={member.name} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {member.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {member.rank}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                ${member.personalVolume}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                ${member.groupVolume}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {member.teamSize} members
                              </div>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>}
          {/* Team Members Tab */}
          {activeTab === 'members' && <div>
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="w-full md:w-96">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Search team members..." />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <FilterIcon className="h-4 w-4 mr-2 text-gray-500" />
                    Filter
                  </button>
                  <div className="relative">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      Sort by: Rank
                      <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Member
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Personal Volume
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Group Volume
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team Size
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map(member => <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full object-cover" src={member.image} alt={member.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {member.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {member.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {member.joinDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${member.personalVolume}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${member.groupVolume}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {member.teamSize} members
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-purple-600 hover:text-purple-900 mr-4">
                            View
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">
                            Message
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">5</span> of{' '}
                  <span className="font-medium">67</span> team members
                </div>
                <div className="flex-1 flex justify-end">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3">
                    Previous
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>}
          {/* Team Structure Tab */}
          {activeTab === 'structure' && <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Organization Chart
                </h3>
                <p className="text-sm text-gray-500">
                  Visualize your team structure and relationships.
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <div className="h-96 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <p className="text-gray-500">
                      Organization Chart Visualization
                    </p>
                    <p className="text-sm text-gray-400">
                      (Interactive chart would display here)
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-3">
                    Expand All
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-3">
                    Collapse All
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                    Download Chart
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Levels Breakdown
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">Level 1</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">
                        5
                      </p>
                      <p className="text-sm text-gray-500">members</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        $4,150
                      </p>
                      <p className="text-xs text-gray-500">volume</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">Level 2</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">
                        12
                      </p>
                      <p className="text-sm text-gray-500">members</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        $8,750
                      </p>
                      <p className="text-xs text-gray-500">volume</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">Level 3</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">
                        18
                      </p>
                      <p className="text-sm text-gray-500">members</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        $12,400
                      </p>
                      <p className="text-xs text-gray-500">volume</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">Level 4</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">
                        22
                      </p>
                      <p className="text-sm text-gray-500">members</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        $9,800
                      </p>
                      <p className="text-xs text-gray-500">volume</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">Level 5+</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-2">
                        10
                      </p>
                      <p className="text-sm text-gray-500">members</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        $2,000
                      </p>
                      <p className="text-xs text-gray-500">volume</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {/* Rankings & Recognition Tab */}
          {activeTab === 'rankings' && <div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Rank Requirements
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Personal Volume
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Group Volume
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Active Frontline
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Frontline Ranks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Associate
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">100 PV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Senior Associate
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">300 PV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1,000 GV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Team Leader
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">500 PV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">3,000 GV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">3</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">-</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Silver Director
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">750 PV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">10,000 GV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">4</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            2 Team Leaders
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            Gold Director
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">1,000 PV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">25,000 GV</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">5</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            2 Silver Directors
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Your Rank Progress
                </h3>
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        Progress to Diamond Director
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        58% complete
                      </span>
                    </div>
                    <span className="text-sm font-medium text-purple-600">
                      $25,000 / $50,000 GV
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{
                  width: '58%'
                }}></div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-gray-900">
                        Personal Volume
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-bold text-gray-900">
                          950 / 1,000
                        </p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          95%
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-gray-900">
                        Active Frontline
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-bold text-gray-900">4 / 5</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-gray-900">
                        Silver Directors
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-bold text-gray-900">1 / 2</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          50%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Team Achievements
                </h3>
                <div className="bg-white border rounded-lg p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-yellow-50">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <AwardIcon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">
                            Top Recruiter
                          </h4>
                          <p className="text-xs text-gray-500">May 2023</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Jennifer Wu" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Jennifer Wu
                          </p>
                          <p className="text-xs text-gray-500">
                            5 new recruits
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <TrendingUpIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">
                            Highest Volume
                          </h4>
                          <p className="text-xs text-gray-500">May 2023</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Michael Rodriguez" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Michael Rodriguez
                          </p>
                          <p className="text-xs text-gray-500">
                            $18,750 group volume
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <UsersIcon className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">
                            Most Active Team
                          </h4>
                          <p className="text-xs text-gray-500">May 2023</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Sarah Johnson" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Sarah Johnson
                          </p>
                          <p className="text-xs text-gray-500">
                            96% active rate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default TeamPage;