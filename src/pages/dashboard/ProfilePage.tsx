import React from 'react';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon, CameraIcon } from 'lucide-react';
const ProfilePage = () => {
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Profile</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Personal Information
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50">
            Edit Profile
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
              <div className="relative">
                <img className="h-40 w-40 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <CameraIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">Dharmendra</h3>
                <p className="text-sm text-purple-600">Managing Director</p>
                <p className="text-sm text-gray-500">Bhargix.com</p>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-900">Dharmendra Prajapati</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="flex items-center">
                    <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-900">dprajapati15302@gmail.com</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-900">(555) 123-4567</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-900">Bhopal</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Distributor ID
                  </label>
                  <span className="text-gray-900">GD78452</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sponsor
                  </label>
                  <span className="text-gray-900">
                    Robert Johnson (RJ45678)
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <p className="text-gray-900">
                  Marketing professional with 10+ years experience, now building
                  my MLM Pro business full-time. Passionate about helping others
                  achieve financial freedom through our opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Account Settings */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Account Settings
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-md font-medium text-gray-900 mb-3">
                Password
              </h3>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Change Password
              </button>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-medium text-gray-900 mb-3">
                Two-Factor Authentication
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="flex items-center">
                  <button className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Setup 2FA
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-medium text-gray-900 mb-3">
                Email Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="notifications-team" name="notifications-team" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" defaultChecked />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="notifications-team" className="font-medium text-gray-700">
                      Team activity
                    </label>
                    <p className="text-gray-500">
                      Get notified when new team members join your downline
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="notifications-earnings" name="notifications-earnings" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" defaultChecked />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="notifications-earnings" className="font-medium text-gray-700">
                      Earnings
                    </label>
                    <p className="text-gray-500">
                      Get notified when you receive commissions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="notifications-promotions" name="notifications-promotions" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" defaultChecked />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="notifications-promotions" className="font-medium text-gray-700">
                      Promotions
                    </label>
                    <p className="text-gray-500">
                      Get notified about new promotions and special offers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Information */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Payment Information
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50">
            Update Payment Info
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-900 mb-3">
              Commission Payment Method
            </h3>
            <div className="flex items-center p-4 border rounded-md bg-gray-50">
              <div className="flex-shrink-0">
                <div className="h-10 w-16 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                  BANK
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Direct Deposit
                </div>
                <div className="text-sm text-gray-500">Chase Bank ****6789</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-md font-medium text-gray-900 mb-3">
              Tax Information
            </h3>
            <div className="text-sm text-gray-500">
              <p>
                For tax purposes, we have the following information on file:
              </p>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block text-gray-700 font-medium">
                    Tax Form:
                  </span>
                  <span>W-9 (US Citizen/Resident)</span>
                </div>
                <div>
                  <span className="block text-gray-700 font-medium">
                    Tax ID:
                  </span>
                  <span>XXX-XX-6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfilePage;