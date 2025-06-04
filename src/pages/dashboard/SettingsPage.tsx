import React, { useState } from 'react';
import { BellIcon, LockIcon, UserIcon, CreditCardIcon, GlobeIcon, ShieldIcon, MailIcon } from 'lucide-react';
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account');
  const tabs = [{
    id: 'account',
    name: 'Account',
    icon: UserIcon
  }, {
    id: 'password',
    name: 'Password & Security',
    icon: LockIcon
  }, {
    id: 'notifications',
    name: 'Notifications',
    icon: BellIcon
  }, {
    id: 'payment',
    name: 'Payment Methods',
    icon: CreditCardIcon
  }, {
    id: 'privacy',
    name: 'Privacy',
    icon: ShieldIcon
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="md:grid md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-gray-50 pt-6 pb-8">
            <nav className="space-y-1 px-2">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full group rounded-md px-3 py-2 flex items-center text-sm font-medium ${activeTab === tab.id ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
                  <tab.icon className={`flex-shrink-0 -ml-1 mr-3 h-6 w-6 ${activeTab === tab.id ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  <span className="truncate">{tab.name}</span>
                </button>)}
            </nav>
          </div>
          {/* Content area */}
          <div className="md:col-span-3 py-6 px-4 sm:p-6">
            {/* Account Settings */}
            {activeTab === 'account' && <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Account Settings
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input type="text" name="first-name" id="first-name" defaultValue="John" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input type="text" name="last-name" id="last-name" defaultValue="Doe" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input type="email" name="email-address" id="email-address" defaultValue="john.doe@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input type="tel" name="phone" id="phone" defaultValue="(555) 123-4567" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select id="country" name="country" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input type="text" name="street-address" id="street-address" defaultValue="123 Main St" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input type="text" name="city" id="city" defaultValue="New York" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input type="text" name="region" id="region" defaultValue="NY" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input type="text" name="postal-code" id="postal-code" defaultValue="10001" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Cancel
                      </button>
                      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>}
            {/* Password & Security */}
            {activeTab === 'password' && <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Password & Security
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900">
                      Change Password
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                          Current Password
                        </label>
                        <input type="password" name="current-password" id="current-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                          New Password
                        </label>
                        <input type="password" name="new-password" id="new-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <input type="password" name="confirm-password" id="confirm-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                      </div>
                      <div>
                        <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Two-Factor Authentication
                    </h3>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="two-factor" name="two-factor" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="two-factor" className="font-medium text-gray-700">
                            Enable two-factor authentication
                          </label>
                          <p className="text-gray-500">
                            Add an extra layer of security to your account by
                            requiring a verification code in addition to your
                            password.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Setup Two-Factor Authentication
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Login Sessions
                    </h3>
                    <div className="mt-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Current Session
                            </p>
                            <p className="text-xs text-gray-500">
                              Chrome on Windows • New York, USA • Started 2
                              hours ago
                            </p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active Now
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button type="button" className="inline-flex justify-center py-2 px-4 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Sign Out All Other Sessions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Notifications */}
            {activeTab === 'notifications' && <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Notification Settings
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900">
                      Email Notifications
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-team" name="email-team" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-team" className="font-medium text-gray-700">
                            Team activity
                          </label>
                          <p className="text-gray-500">
                            Get notified when new team members join your
                            downline
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-earnings" name="email-earnings" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-earnings" className="font-medium text-gray-700">
                            Earnings
                          </label>
                          <p className="text-gray-500">
                            Get notified when you receive commissions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-orders" name="email-orders" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-orders" className="font-medium text-gray-700">
                            Orders
                          </label>
                          <p className="text-gray-500">
                            Get notified about new orders and order updates
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-promotions" name="email-promotions" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-promotions" className="font-medium text-gray-700">
                            Promotions
                          </label>
                          <p className="text-gray-500">
                            Get notified about new promotions and special offers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Push Notifications
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="push-everything" name="push-everything" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-everything" className="font-medium text-gray-700">
                            Everything
                          </label>
                          <p className="text-gray-500">
                            Get all push notifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="push-email" name="push-email" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-email" className="font-medium text-gray-700">
                            Same as email
                          </label>
                          <p className="text-gray-500">
                            Get the same notifications as email
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="push-nothing" name="push-nothing" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-nothing" className="font-medium text-gray-700">
                            No push notifications
                          </label>
                          <p className="text-gray-500">
                            Turn off all push notifications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Cancel
                      </button>
                      <button type="button" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Payment Methods */}
            {activeTab === 'payment' && <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Payment Methods
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900">
                      Commission Payment Method
                    </h3>
                    <div className="mt-4">
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
                          <div className="text-sm text-gray-500">
                            Chase Bank ****6789
                          </div>
                        </div>
                        <div className="ml-auto">
                          <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Credit/Debit Cards
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center p-4 border rounded-md">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-12 bg-gray-200 rounded flex items-center justify-center">
                            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Visa ending in 4242
                          </div>
                          <div className="text-sm text-gray-500">
                            Expires 12/2024
                          </div>
                        </div>
                        <div className="ml-auto flex space-x-4">
                          <button className="text-sm font-medium text-gray-700 hover:text-gray-800">
                            Edit
                          </button>
                          <button className="text-sm font-medium text-red-600 hover:text-red-500">
                            Remove
                          </button>
                        </div>
                      </div>
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Billing Address
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                    Dharmendra
                        <br />
                    210 
                        <br />
                      bhopal
                        <br />
                        India
                      </p>
                      <div className="mt-4">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Edit Billing Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Privacy */}
            {activeTab === 'privacy' && <div>
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Privacy Settings
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900">
                      Profile Visibility
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="public-profile" name="profile-visibility" type="radio" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="public-profile" className="font-medium text-gray-700">
                            Public profile
                          </label>
                          <p className="text-gray-500">
                            Your profile is visible to everyone in the MLM Pro
                            network
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="limited-profile" name="profile-visibility" type="radio" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="limited-profile" className="font-medium text-gray-700">
                            Limited profile
                          </label>
                          <p className="text-gray-500">
                            Only your upline and downline can see your profile
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="private-profile" name="profile-visibility" type="radio" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="private-profile" className="font-medium text-gray-700">
                            Private profile
                          </label>
                          <p className="text-gray-500">
                            Only your direct upline can see your profile
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Contact Preferences
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="allow-direct-messages" name="allow-direct-messages" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="allow-direct-messages" className="font-medium text-gray-700">
                            Allow direct messages
                          </label>
                          <p className="text-gray-500">
                            Other distributors can send you direct messages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="show-email" name="show-email" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="show-email" className="font-medium text-gray-700">
                            Show email address
                          </label>
                          <p className="text-gray-500">
                            Your email address is visible to other distributors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="show-phone" name="show-phone" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="show-phone" className="font-medium text-gray-700">
                            Show phone number
                          </label>
                          <p className="text-gray-500">
                            Your phone number is visible to other distributors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">
                      Data & Privacy
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="data-collection" name="data-collection" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="data-collection" className="font-medium text-gray-700">
                            Data collection
                          </label>
                          <p className="text-gray-500">
                            Allow us to collect data about your activity to
                            improve your experience
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="personalized-recommendations" name="personalized-recommendations" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="personalized-recommendations" className="font-medium text-gray-700">
                            Personalized recommendations
                          </label>
                          <p className="text-gray-500">
                            Receive personalized product and business
                            recommendations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Download My Data
                      </button>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Cancel
                      </button>
                      <button type="button" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default SettingsPage;