import React from 'react';
import { BellIcon, CalendarIcon, UsersIcon, TagIcon } from 'lucide-react';
const AnnouncementsPage = () => {
  // Mock data for announcements
  const announcements = [{
    id: 1,
    title: 'New Product Launch: Advanced Wellness Formula',
    date: '2023-06-15',
    category: 'Products',
    content: 'We are excited to announce the launch of our new Advanced Wellness Formula, available for purchase starting June 20th. This revolutionary product combines our proprietary blend of antioxidants with newly discovered plant extracts to provide unparalleled immune support. Special pre-launch discounts available for distributors until June 19th.',
    important: true
  }, {
    id: 2,
    title: 'June Compensation Plan Updates',
    date: '2023-06-10',
    category: 'Business',
    content: 'Starting July 1st, we are enhancing our compensation plan to provide even greater rewards for team building. The new structure includes increased percentages for level 3-5 commissions and a new car bonus program for Gold Directors and above. Join our webinar on June 25th to learn all the details.',
    important: true
  }, {
    id: 3,
    title: 'Annual Convention Registration Now Open',
    date: '2023-06-05',
    category: 'Events',
    content: 'Registration is now open for our annual convention, taking place September 15-17 in Las Vegas. Early bird pricing available until July 15th. This year\'s theme is "Elevate" and will feature keynote speakers, leadership training, product workshops, and our prestigious recognition ceremony.',
    important: false
  }, {
    id: 4,
    title: 'New Marketing Materials Available',
    date: '2023-05-28',
    category: 'Marketing',
    content: "We've added new marketing materials to your resource library, including social media templates, product images, and presentation slides. These professionally designed assets are ready to use for your summer promotion campaigns.",
    important: false
  }, {
    id: 5,
    title: 'May Recognition: Top Performers',
    date: '2023-06-01',
    category: 'Recognition',
    content: 'Congratulations to our top performers for May! Special recognition goes to Sarah Johnson for achieving Diamond Director status, and to the Eastern Region team for their record-breaking group volume of $1.2 million. See the full list of achievers in your back office.',
    important: false
  }];
  // Upcoming events
  const events = [{
    id: 1,
    title: 'Product Training Webinar',
    date: '2023-06-18',
    time: '7:00 PM EST',
    host: 'Dr. Michael Chen, Product Development Director'
  }, {
    id: 2,
    title: 'New Compensation Plan Overview',
    date: '2023-06-25',
    time: '8:00 PM EST',
    host: 'Jennifer Williams, VP of Distributor Development'
  }, {
    id: 3,
    title: 'Leadership Development Call',
    date: '2023-06-30',
    time: '12:00 PM EST',
    host: 'Robert Johnson, CEO'
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Announcements & Events
      </h1>
      {/* Important Announcements */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center">
          <BellIcon className="h-5 w-5 text-red-500 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">
            Important Announcements
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {announcements.filter(a => a.important).map(announcement => <div key={announcement.id} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {announcement.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Important
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {announcement.date}
                  <span className="mx-2">•</span>
                  <TagIcon className="h-4 w-4 mr-1" />
                  {announcement.category}
                </div>
                <div className="text-gray-600">
                  <p>{announcement.content}</p>
                </div>
                <div className="mt-4">
                  <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    Read More
                  </button>
                </div>
              </div>)}
        </div>
      </div>
      {/* Upcoming Events */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map(event => <div key={event.id} className="border rounded-lg overflow-hidden">
                <div className="bg-purple-50 px-4 py-5 border-b border-purple-100 flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-sm text-purple-700 font-medium">
                      {new Date(event.date).toLocaleString('default', {
                    month: 'short'
                  })}
                    </div>
                    <div className="text-2xl font-bold text-purple-800">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {event.time}
                    </div>
                    <div className="text-xs text-gray-500">Online Event</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    <span className="truncate">{event.host}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-1 px-3 rounded-md text-sm font-medium hover:bg-purple-700">
                      Register
                    </button>
                    <button className="py-1 px-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-6 text-center">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              View All Events
            </button>
          </div>
        </div>
      </div>
      {/* All Announcements */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            All Announcements
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {announcements.map(announcement => <div key={announcement.id} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {announcement.title}
                </h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${announcement.category === 'Products' ? 'bg-blue-100 text-blue-800' : announcement.category === 'Business' ? 'bg-yellow-100 text-yellow-800' : announcement.category === 'Events' ? 'bg-purple-100 text-purple-800' : announcement.category === 'Marketing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {announcement.category}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {announcement.date}
              </div>
              <div className="text-gray-600">
                <p>{announcement.content}</p>
              </div>
              <div className="mt-4">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
                  Read More
                </button>
              </div>
            </div>)}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">5</span> of{' '}
              <span className="font-medium">24</span> announcements
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
export default AnnouncementsPage;