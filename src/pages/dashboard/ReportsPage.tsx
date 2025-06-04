import React, { useState } from 'react';
import { DownloadIcon, CalendarIcon, ChevronDownIcon, BarChart2Icon, PieChartIcon, LineChartIcon, TrendingUpIcon } from 'lucide-react';
const ReportsPage = () => {
  const [dateRange, setDateRange] = useState('This Month');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const dateOptions = ['Today', 'This Week', 'This Month', 'Last Month', 'Last 3 Months', 'This Year', 'Custom'];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Reports & Analytics
      </h1>
      {/* Date Range Selector */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Analytics Dashboard
            </h2>
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Premium
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" onClick={() => setShowDateDropdown(!showDateDropdown)}>
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {dateRange}
                <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
              </button>
              {showDateDropdown && <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    {dateOptions.map(option => <button key={option} className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${dateRange === option ? 'bg-gray-100' : ''}`} onClick={() => {
                  setDateRange(option);
                  setShowDateDropdown(false);
                }}>
                        {option}
                      </button>)}
                  </div>
                </div>}
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <DownloadIcon className="mr-2 h-4 w-4 text-gray-500" />
              Export
            </button>
          </div>
        </div>
      </div>
      {/* Performance Overview */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Performance Overview
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Personal Volume
                  </p>
                  <p className="text-2xl font-bold text-gray-900">$3,542</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <BarChart2Icon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">12% increase</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Group Volume
                  </p>
                  <p className="text-2xl font-bold text-gray-900">$48,392</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <LineChartIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">8% increase</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    New Recruits
                  </p>
                  <p className="text-2xl font-bold text-gray-900">14</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <PieChartIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">4 more</span>
                <span className="text-gray-500 ml-1">than last month</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Earnings
                  </p>
                  <p className="text-2xl font-bold text-gray-900">$8,245</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <BarChart2Icon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm">
                <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">15% increase</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
          </div>
          {/* Sales Trend Chart */}
          <div className="bg-white border rounded-lg mb-6">
            <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-900">Sales Trend</h3>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                  Personal
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  Group
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="h-64 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-500">Sales Trend Visualization</p>
                  <p className="text-sm text-gray-400">
                    (Chart would display here with actual data)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Team Performance and Product Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">
                  Team Performance
                </h3>
              </div>
              <div className="p-4">
                <div className="h-48 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <p className="text-gray-500">Team Performance Chart</p>
                    <p className="text-sm text-gray-400">
                      (Chart would display here)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">
                  Product Distribution
                </h3>
              </div>
              <div className="p-4">
                <div className="h-48 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <p className="text-gray-500">Product Distribution Chart</p>
                    <p className="text-sm text-gray-400">
                      (Chart would display here)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Available Reports */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Available Reports
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h4 className="font-medium text-gray-900">Earnings Reports</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Monthly Commission Report</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Earnings Breakdown</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Annual Income Statement</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h4 className="font-medium text-gray-900">Team Reports</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Downline Activity Report</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Team Volume Analysis</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Rank Advancement Tracker</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h4 className="font-medium text-gray-900">Business Reports</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Customer Order History</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Product Performance</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center justify-between py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <span>Tax Summary</span>
                      <DownloadIcon className="h-4 w-4 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Need Custom Reports?
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
              Our analytics team can create custom reports tailored to your
              specific business needs. Contact us to discuss your requirements.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Request Custom Report
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default ReportsPage;