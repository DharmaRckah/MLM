import React, { useState } from 'react';
import { MessageSquareIcon, PhoneIcon, MailIcon, BookOpenIcon, SearchIcon, ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react';
const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  // Mock data for FAQs
  const faqs = [{
    id: 1,
    question: 'How do I place an order?',
    answer: 'You can place an order by going to the Products page, selecting the items you want, and clicking "Add to Cart". Once you\'ve added all desired products, go to your cart and follow the checkout process.',
    category: 'Orders'
  }, {
    id: 2,
    question: 'When will I receive my commission payment?',
    answer: "Commission payments are processed on the 15th of each month for the previous month's activity. Payments are sent via direct deposit to the bank account you have on file.",
    category: 'Commissions'
  }, {
    id: 3,
    question: 'How do I enroll a new team member?',
    answer: 'To enroll a new team member, go to your Network page and click on "Add New Member". You\'ll need to provide their basic information and help them select a starter kit. They\'ll receive an email with instructions to complete their enrollment.',
    category: 'Team Building'
  }, {
    id: 4,
    question: 'What is the return policy?',
    answer: 'We offer a 30-day satisfaction guarantee on all products. If a customer is not satisfied, they can return the unused portion for a full refund (minus shipping costs). To initiate a return, go to the Orders page and select the order you want to return.',
    category: 'Orders'
  }, {
    id: 5,
    question: 'How do I qualify for the next rank?',
    answer: 'Rank qualifications are based on personal volume, group volume, and organizational structure. For specific requirements for each rank, please visit the Compensation Plan page or download the detailed compensation plan document from the Marketing Tools page.',
    category: 'Commissions'
  }];
  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  // FAQ categories
  const categories = ['All', 'Orders', 'Commissions', 'Team Building', 'Products', 'Technical'];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Support Center
      </h1>
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MessageSquareIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="ml-3 text-lg font-medium text-gray-900">
                Live Chat
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Chat with our support team for immediate assistance with your
              questions.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Available now | Response time: &lt;2 min</span>
            </div>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
              Start Chat
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <PhoneIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="ml-3 text-lg font-medium text-gray-900">
                Phone Support
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Call our dedicated distributor support line for personalized help.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Mon-Fri, 9am-5pm EST</span>
            </div>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
              Call (888) 555-1234
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MailIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="ml-3 text-lg font-medium text-gray-900">
                Email Support
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Send us an email and we'll respond within 24 hours.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Average response time: 12 hours</span>
            </div>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
              Email Support
            </button>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center">
          <BookOpenIcon className="h-5 w-5 text-gray-400 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="p-6">
          {/* Search and Filter */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-96">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Search FAQs..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <button key={category} className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>)}
              </div>
            </div>
          </div>
          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map(faq => <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <p className="text-gray-600">{faq.answer}</p>
                  <div className="mt-4 flex items-center justify-end space-x-4">
                    <span className="text-sm text-gray-500">
                      Was this helpful?
                    </span>
                    <button className="inline-flex items-center text-sm text-gray-500 hover:text-green-600">
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      Yes
                    </button>
                    <button className="inline-flex items-center text-sm text-gray-500 hover:text-red-600">
                      <ThumbsDownIcon className="h-4 w-4 mr-1" />
                      No
                    </button>
                  </div>
                </div>
              </div>)}
            {filteredFaqs.length === 0 && <div className="text-center py-10">
                <p className="text-gray-500 mb-2">
                  No FAQs match your search criteria
                </p>
                <button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }} className="text-purple-600 hover:text-purple-800">
                  Clear filters
                </button>
              </div>}
          </div>
          {filteredFaqs.length > 0 && <div className="mt-6 text-center">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                View All FAQs
              </button>
            </div>}
        </div>
      </div>
      {/* Submit a Ticket */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Submit a Support Ticket
          </h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input type="text" id="subject" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" placeholder="Brief description of your issue" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select id="category" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border">
                <option>Orders</option>
                <option>Commissions</option>
                <option>Team Building</option>
                <option>Products</option>
                <option>Technical</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea id="description" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" placeholder="Please provide as much detail as possible"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Attachments (optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default SupportPage;