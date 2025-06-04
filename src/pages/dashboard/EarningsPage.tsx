import React, { useState } from 'react';
import { CalendarIcon, DownloadIcon, ChevronDownIcon, DollarSignIcon, TrendingUpIcon, UsersIcon, PercentIcon } from 'lucide-react';
const EarningsPage = () => {
  const [dateRange, setDateRange] = useState('This Month');
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  // Mock data for earnings
  const earningsData = [{
    id: 1,
    type: 'Retail Commissions',
    amount: 1245.5,
    date: '2023-06-05',
    source: 'Personal Sales',
    status: 'Paid'
  }, {
    id: 2,
    type: 'Team Commissions',
    amount: 3567.25,
    date: '2023-06-05',
    source: 'Level 1-5 Team',
    status: 'Paid'
  }, {
    id: 3,
    type: 'Leadership Bonus',
    amount: 750.0,
    date: '2023-06-05',
    source: 'Gold Director Qualification',
    status: 'Paid'
  }, {
    id: 4,
    type: 'Fast Start Bonus',
    amount: 250.0,
    date: '2023-06-12',
    source: 'New Recruit: Sarah Johnson',
    status: 'Pending'
  }, {
    id: 5,
    type: 'Retail Commissions',
    amount: 325.75,
    date: '2023-06-15',
    source: 'Personal Sales',
    status: 'Pending'
  }, {
    id: 6,
    type: 'Car Allowance',
    amount: 500.0,
    date: '2023-06-05',
    source: 'Gold Director Benefit',
    status: 'Paid'
  }];
  const dateOptions = ['Today', 'This Week', 'This Month', 'Last Month', 'Last 3 Months', 'This Year', 'Custom'];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Earnings</h1>
      {/* Earnings Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSignIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Earnings (MTD)
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $6,638.50
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
                    Projected Monthly
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $8,500.00
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
                <UsersIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Team Commissions
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $3,567.25
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
                <PercentIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Retail Profit
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $1,571.25
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings Chart */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Earnings History
          </h2>
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
        </div>
        <div className="p-6">
          {/* This would typically be a chart component */}
          <div className="h-64 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <div className="text-center">
              <p className="text-gray-500">Earnings Chart Visualization</p>
              <p className="text-sm text-gray-400">
                (Chart would display here with actual data)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Earnings Transactions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Recent Transactions
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <DownloadIcon className="mr-2 h-4 w-4 text-gray-500" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {earningsData.map(transaction => <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.status === 'Paid' ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Paid
                      </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">6</span> of{' '}
              <span className="font-medium">24</span> transactions
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
        </div>
      </div>
    </div>;
};
export default EarningsPage;