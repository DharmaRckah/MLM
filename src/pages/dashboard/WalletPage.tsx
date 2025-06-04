import React, { useState } from 'react';
import { DollarSignIcon, CreditCardIcon, ArrowDownIcon, ArrowUpIcon, FileTextIcon, DownloadIcon, PlusIcon } from 'lucide-react';
const WalletPage = () => {
  const [activeTab, setActiveTab] = useState('balance');
  // Mock data for transactions
  const transactions = [{
    id: 1,
    type: 'Commission Payment',
    amount: 1245.5,
    date: '2023-06-05',
    status: 'Completed'
  }, {
    id: 2,
    type: 'Withdrawal to Bank',
    amount: -850.0,
    date: '2023-06-02',
    status: 'Completed'
  }, {
    id: 3,
    type: 'Bonus Payment',
    amount: 500.0,
    date: '2023-05-28',
    status: 'Completed'
  }, {
    id: 4,
    type: 'Withdrawal to Bank',
    amount: -1200.0,
    date: '2023-05-15',
    status: 'Completed'
  }, {
    id: 5,
    type: 'Commission Payment',
    amount: 975.25,
    date: '2023-05-05',
    status: 'Completed'
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Wallet</h1>
      {/* Wallet Balance */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Available Balance</h2>
                <DollarSignIcon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">$2,345.75</div>
              <div className="text-sm opacity-80">
                Last updated: June 15, 2023
              </div>
              <div className="mt-6 flex space-x-2">
                <button className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-md text-sm font-medium">
                  Withdraw
                </button>
                <button className="flex-1 bg-white text-purple-700 py-2 px-4 rounded-md text-sm font-medium">
                  View History
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Pending Earnings
                </h2>
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <DollarSignIcon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                $750.00
              </div>
              <div className="text-sm text-gray-500">
                Available on June 30, 2023
              </div>
              <div className="mt-6">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Monthly Earnings
                </h2>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ArrowUpIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                $3,245.75
              </div>
              <div className="text-sm text-gray-500">
                <span className="text-green-600 font-medium">↑ 12%</span> vs
                last month
              </div>
              <div className="mt-6">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium">
                  View Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Navigation */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 pt-5 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === 'balance' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('balance')}>
              Transaction History
            </button>
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === 'withdraw' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('withdraw')}>
              Withdraw Funds
            </button>
            <button className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'payment' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab('payment')}>
              Payment Methods
            </button>
          </div>
        </div>
        <div className="p-6">
          {/* Transaction History */}
          {activeTab === 'balance' && <div>
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Transactions
                </h3>
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
                        Transaction
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
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
                    {transactions.map(transaction => <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.amount > 0 ? '+' : ''}$
                          {Math.abs(transaction.amount).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-purple-600 hover:text-purple-900">
                            <FileTextIcon className="h-5 w-5" />
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
                  <span className="font-medium">20</span> transactions
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
          {/* Withdraw Funds */}
          {activeTab === 'withdraw' && <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Withdraw Funds
                </h3>
                <p className="text-sm text-gray-500">
                  Transfer your available balance to your bank account or other
                  payment methods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Available for withdrawal
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      $2,345.75
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Minimum withdrawal</p>
                    <p className="text-sm font-medium text-gray-700">$50.00</p>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="withdraw-amount" className="block text-sm font-medium text-gray-700">
                    Amount to Withdraw
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="withdraw-amount" id="withdraw-amount" className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0.00" />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button type="button" className="mr-4 text-sm font-medium text-purple-600 hover:text-purple-500">
                        Max
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
                    Withdrawal Method
                  </label>
                  <select id="payment-method" name="payment-method" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md border">
                    <option>Bank Account (Chase Bank ****6789)</option>
                    <option>PayPal (john.doe@example.com)</option>
                    <option>Add New Payment Method</option>
                  </select>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Cancel
                    </button>
                    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Withdraw Funds
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">
                  Recent Withdrawals
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 border rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          $850.00 to Chase Bank ****6789
                        </p>
                        <p className="text-xs text-gray-500">June 2, 2023</p>
                      </div>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-4 border rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          $1,200.00 to Chase Bank ****6789
                        </p>
                        <p className="text-xs text-gray-500">May 15, 2023</p>
                      </div>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {/* Payment Methods */}
          {activeTab === 'payment' && <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Payment Methods
                </h3>
                <p className="text-sm text-gray-500">
                  Manage your payment methods for commissions and withdrawals.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900 mb-4">
                    Bank Accounts
                  </h4>
                  <div className="bg-white border rounded-md overflow-hidden">
                    <div className="p-4 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-16 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                          BANK
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Chase Bank
                        </div>
                        <div className="text-sm text-gray-500">
                          Checking Account ****6789
                        </div>
                      </div>
                      <div className="ml-auto flex items-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mr-4">
                          Default
                        </span>
                        <button className="text-sm font-medium text-gray-700 hover:text-gray-800 mr-4">
                          Edit
                        </button>
                        <button className="text-sm font-medium text-red-600 hover:text-red-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <PlusIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                      Add Bank Account
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium text-gray-900 mb-4">
                    Other Payment Methods
                  </h4>
                  <div className="bg-white border rounded-md overflow-hidden mb-4">
                    <div className="p-4 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-16 bg-blue-400 rounded-md flex items-center justify-center text-white font-bold">
                          PAYPAL
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          PayPal
                        </div>
                        <div className="text-sm text-gray-500">
                          john.doe@example.com
                        </div>
                      </div>
                      <div className="ml-auto flex items-center">
                        <button className="text-sm font-medium text-gray-700 hover:text-gray-800 mr-4">
                          Edit
                        </button>
                        <button className="text-sm font-medium text-red-600 hover:text-red-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <PlusIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                      Add Payment Method
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium text-gray-900 mb-4">
                    Payment Settings
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="auto-withdraw" name="auto-withdraw" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="auto-withdraw" className="font-medium text-gray-700">
                          Automatic withdrawals
                        </label>
                        <p className="text-gray-500">
                          Automatically withdraw funds when your balance exceeds
                          $500
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="email-notifications" name="email-notifications" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-notifications" className="font-medium text-gray-700">
                          Email notifications
                        </label>
                        <p className="text-gray-500">
                          Receive email notifications for deposits and
                          withdrawals
                        </p>
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
export default WalletPage;