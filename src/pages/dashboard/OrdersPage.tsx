import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ChevronDownIcon, TruckIcon, PackageIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from 'lucide-react';
const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  // Mock data for orders
  const orders = [{
    id: 'ORD-2023-06-15-001',
    date: '2023-06-15',
    total: 245.85,
    status: 'Delivered',
    items: [{
      name: 'Wellness Essential Pack',
      quantity: 2,
      price: 99.95
    }, {
      name: 'Energy Boost Formula',
      quantity: 1,
      price: 45.95
    }],
    trackingNumber: '1Z999AA10123456784',
    shippingAddress: '123 Main St, New York, NY 10001'
  }, {
    id: 'ORD-2023-06-10-002',
    date: '2023-06-10',
    total: 129.99,
    status: 'Processing',
    items: [{
      name: 'Skin Renewal System',
      quantity: 1,
      price: 129.99
    }],
    trackingNumber: null,
    shippingAddress: '123 Main St, New York, NY 10001'
  }, {
    id: 'ORD-2023-05-28-003',
    date: '2023-05-28',
    total: 89.95,
    status: 'Shipped',
    items: [{
      name: 'Weight Management Program',
      quantity: 1,
      price: 89.95
    }],
    trackingNumber: '1Z999AA10123456785',
    shippingAddress: '123 Main St, New York, NY 10001'
  }, {
    id: 'ORD-2023-05-15-004',
    date: '2023-05-15',
    total: 195.94,
    status: 'Delivered',
    items: [{
      name: 'Energy Boost Formula',
      quantity: 2,
      price: 45.99
    }, {
      name: 'Advanced Anti-Aging Serum',
      quantity: 1,
      price: 79.99
    }, {
      name: 'Brain Focus Formula',
      quantity: 1,
      price: 23.97
    }],
    trackingNumber: '1Z999AA10123456786',
    shippingAddress: '123 Main St, New York, NY 10001'
  }, {
    id: 'ORD-2023-05-05-005',
    date: '2023-05-05',
    total: 149.95,
    status: 'Cancelled',
    items: [{
      name: 'Home Essentials Kit',
      quantity: 1,
      price: 149.95
    }],
    trackingNumber: null,
    shippingAddress: '123 Main St, New York, NY 10001'
  }];
  const tabs = [{
    id: 'All',
    label: 'All Orders'
  }, {
    id: 'Processing',
    label: 'Processing'
  }, {
    id: 'Shipped',
    label: 'Shipped'
  }, {
    id: 'Delivered',
    label: 'Delivered'
  }, {
    id: 'Cancelled',
    label: 'Cancelled'
  }];
  const filteredOrders = activeTab === 'All' ? orders : orders.filter(order => order.status === activeTab);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'Processing':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <TruckIcon className="h-5 w-5 text-blue-500" />;
      case 'Cancelled':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <PackageIcon className="h-5 w-5 text-gray-500" />;
    }
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Orders</h1>
      {/* Search and Filter */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Search orders..." />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FilterIcon className="h-4 w-4 mr-2 text-gray-500" />
                Filter
              </button>
              <div className="relative">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Date: Newest First
                  <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => <button key={tab.id} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap mr-8 ${activeTab === tab.id ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </button>)}
            </div>
          </div>
        </div>
      </div>
      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map(order => <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {order.id}
                  </h3>
                  <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Order Date: {order.date}
                </p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="text-lg font-medium text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
                <button className="ml-4 text-sm font-medium text-purple-600 hover:text-purple-500">
                  View Details
                </button>
              </div>
            </div>
            <div className="px-6 py-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Items</h4>
              <ul className="divide-y divide-gray-200">
                {order.items.map((item, index) => <li key={index} className="py-3 flex justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900">{item.name}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        x{item.quantity}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>)}
              </ul>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex items-center">
              <div className="flex-shrink-0">{getStatusIcon(order.status)}</div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">
                  {order.status === 'Delivered' && 'Order delivered'}
                  {order.status === 'Processing' && 'Order is being processed'}
                  {order.status === 'Shipped' && 'Order shipped'}
                  {order.status === 'Cancelled' && 'Order cancelled'}
                </h4>
                {order.trackingNumber ? <p className="text-sm text-gray-500">
                    Tracking: {order.trackingNumber}
                  </p> : order.status !== 'Cancelled' ? <p className="text-sm text-gray-500">
                    Tracking information will be available soon
                  </p> : null}
              </div>
              {(order.status === 'Shipped' || order.status === 'Delivered') && <div className="ml-auto">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Track Package
                  </button>
                </div>}
              {order.status === 'Processing' && <div className="ml-auto">
                  <button className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50">
                    Cancel Order
                  </button>
                </div>}
            </div>
          </div>)}
      </div>
      {/* Empty state if no orders match filter */}
      {filteredOrders.length === 0 && <div className="bg-white rounded-lg shadow p-8 text-center">
          <PackageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No orders found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            You don't have any {activeTab.toLowerCase()} orders at the moment.
          </p>
          {activeTab !== 'All' && <div className="mt-6">
              <button onClick={() => setActiveTab('All')} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                View All Orders
              </button>
            </div>}
        </div>}
    </div>;
};
export default OrdersPage;