import React from 'react';
import { UsersIcon, LinkIcon, CopyIcon } from 'lucide-react';
const ReferralsPage = () => {
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        My Referrals
      </h1>
      {/* Basic placeholder content */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Your Referral Link
              </h2>
              <p className="text-sm text-gray-500">
                Share this link to invite others to join your team
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-grow bg-gray-50 p-3 rounded-lg text-sm text-gray-500">
              https://mlmpro.com/join?ref=johndoe
            </div>
            <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <CopyIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default ReferralsPage;