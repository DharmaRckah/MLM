import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, UsersIcon, DollarSignIcon, ShoppingBagIcon, BarChart3Icon } from 'lucide-react';
const DashboardHome = () => {
  return <div>
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900">
          Welcome back, John!
        </h2>
        <p className="text-sm text-gray-500">
          Here's what's happening with your MLM business today.
        </p>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSignIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Earnings
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $24,567.84
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <div className="font-medium text-green-600 hover:text-green-900 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                12% from last month
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
                    Team Members
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">128</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <div className="font-medium text-green-600 hover:text-green-900 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />4 new this week
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Personal Sales
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $3,624.50
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <div className="font-medium text-red-600 hover:text-red-900 flex items-center">
                <ArrowDownIcon className="h-4 w-4 mr-1" />
                3% from last month
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart3Icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Group Volume
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      $48,392.75
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <div className="font-medium text-green-600 hover:text-green-900 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                8% from last month
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent activity */}
        <div className="bg-white shadow rounded-lg lg:col-span-2">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2">
                  <UsersIcon className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    New team member joined
                  </p>
                  <p className="text-sm text-gray-500">
                    Sarah Johnson joined your downline
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-500">2h ago</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2">
                  <DollarSignIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    Commission payment received
                  </p>
                  <p className="text-sm text-gray-500">
                    $527.32 deposited to your account
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full p-2">
                  <ShoppingBagIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    New product order
                  </p>
                  <p className="text-sm text-gray-500">
                    Michael ordered Wellness Essential Pack
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-500">2d ago</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <div className="bg-yellow-100 rounded-full p-2">
                  <BarChart3Icon className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    Rank advancement
                  </p>
                  <p className="text-sm text-gray-500">
                    You're now eligible for Silver Director rank
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-500">3d ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
              View all activity
            </a>
          </div>
        </div>
        {/* Upcoming events */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Upcoming Events
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Team Training Webinar
                  </p>
                  <p className="text-sm text-gray-500">
                    Learn about the new product line
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-600">
                    Tomorrow
                  </p>
                  <p className="text-sm text-gray-500">2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Leadership Call
                  </p>
                  <p className="text-sm text-gray-500">
                    Monthly strategy session
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-600">Jun 15</p>
                  <p className="text-sm text-gray-500">5:30 PM</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Virtual Business Opportunity
                  </p>
                  <p className="text-sm text-gray-500">
                    Bring guests to learn about MLM Pro
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-600">Jun 18</p>
                  <p className="text-sm text-gray-500">7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
              View all events
            </a>
          </div>
        </div>
      </div>
      {/* Rank progress */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Rank Progress
          </h3>
        </div>
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-sm font-medium text-gray-900">
                Progress to Gold Director
              </span>
              <span className="ml-2 text-sm text-gray-500">70% complete</span>
            </div>
            <span className="text-sm font-medium text-purple-600">
              $8,452 / $12,000
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{
            width: '70%'
          }}></div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              You need $3,548 more in group volume this month to qualify for
              Gold Director rank.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default DashboardHome;