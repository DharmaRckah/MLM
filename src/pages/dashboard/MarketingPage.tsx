import React from 'react';
import { DownloadIcon, LinkIcon, CopyIcon, ImageIcon, FileTextIcon, VideoIcon } from 'lucide-react';
const MarketingPage = () => {
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Marketing Tools
      </h1>
      {/* Personal Links */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Your Personalized Links
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Referral Link
              </label>
              <div className="flex items-center">
                <div className="flex-grow bg-gray-50 border rounded-l-md px-3 py-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                  https://mlmpro.com/join?ref=johndoe
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md">
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Personal Shop
              </label>
              <div className="flex items-center">
                <div className="flex-grow bg-gray-50 border rounded-l-md px-3 py-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
                  https://mlmpro.com/shop/johndoe
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md">
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Link Performance
                  </h3>
                  <p className="text-xs text-gray-500">Last 30 days</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    245 clicks
                  </p>
                  <p className="text-xs text-gray-500">12 conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Content */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Social Media Content
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1556229174-5e42a09e40c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wellness product promotion" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Wellness Product Promotion
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Perfect for Instagram and Facebook
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Business opportunity" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Business Opportunity Post
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Great for LinkedIn and Facebook
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Success story" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Success Story Template
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Share your journey on any platform
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              View All Social Media Content
            </button>
          </div>
        </div>
      </div>
      {/* Marketing Materials */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Marketing Materials
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <FileTextIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Product Brochures
                  </h3>
                  <p className="text-xs text-gray-500">
                    PDF files for printing or sharing
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Wellness Product Catalog
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Beauty Products Guide
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Home Products Catalog
                </button>
              </div>
            </div>
            <div className="border rounded-lg p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <VideoIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Video Resources
                  </h3>
                  <p className="text-xs text-gray-500">
                    Share these videos with prospects
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Business Opportunity (5:32)
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Product Demonstration (8:14)
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Success Stories (12:45)
                </button>
              </div>
            </div>
            <div className="border rounded-lg p-5">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Presentation Templates
                  </h3>
                  <p className="text-xs text-gray-500">
                    Ready-to-use presentations
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Business Overview (PowerPoint)
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Compensation Plan (PowerPoint)
                </button>
                <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2 text-gray-500" />
                  Product Training (PowerPoint)
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-purple-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Need Custom Marketing Materials?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Our design team can create personalized marketing materials for
              your specific needs.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Request Custom Materials
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default MarketingPage;