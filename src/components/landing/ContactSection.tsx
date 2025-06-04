import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Have questions? Our team is here to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Phone Support
                </h3>
                <p className="mt-1 text-gray-600">Mon-Fri, 9am-5pm EST</p>
                <p className="mt-2 text-purple-600">(888) 555-1234</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <MailIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">
                  We'll respond within 24 hours
                </p>
                <p className="mt-2 text-purple-600">support@mlmpro.com</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Office</h3>
                <p className="mt-1 text-gray-600">
                  123 Business Ave, Suite 500
                </p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 gap-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input type="text" name="first-name" id="first-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input type="text" name="last-name" id="last-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" name="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 border"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;