import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const faqs = [{
  question: 'How much does it cost to join MLM Pro?',
  answer: 'The basic distributor starter kit is $99, which includes product samples, marketing materials, and access to our online training platform. We also offer premium packages with more products at $299 and $499.'
}, {
  question: 'Do I need prior sales experience?',
  answer: 'No prior experience is necessary. Our comprehensive training system will teach you everything you need to know about the products and how to build your business. We provide step-by-step guidance for beginners.'
}, {
  question: 'How soon can I start earning money?',
  answer: 'You can start earning retail profits from your very first sale. Most new distributors who follow our system begin to see commissions within their first month. Your income potential grows as you build your team and advance in rank.'
}, {
  question: 'Is this a pyramid scheme?',
  answer: 'Absolutely not. MLM Pro is a legitimate direct sales company where distributors earn income from the sale of real products to real customers. Pyramid schemes involve making money solely from recruiting others with no actual products, which is illegal and not our business model.'
}, {
  question: 'What support will I receive?',
  answer: "You'll receive support from your sponsor, upline leaders, and our corporate team. We provide weekly training webinars, a comprehensive online learning center, marketing tools, and a responsive customer service department."
}, {
  question: 'Can I do this part-time?',
  answer: 'Yes! Many of our most successful distributors started part-time while maintaining their full-time jobs. You can work your MLM Pro business in as little as 5-10 hours per week and scale up as your business grows.'
}];
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get answers to common questions about our MLM opportunity.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-purple-600" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
            Contact Us
          </a>
        </div>
      </div>
    </section>;
};
export default FaqSection;