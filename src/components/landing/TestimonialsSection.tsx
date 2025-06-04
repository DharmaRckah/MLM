import React from 'react';
import { StarIcon } from 'lucide-react';
const testimonials = [{
  name: 'Sarah Johnson',
  role: 'Diamond Director',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  content: "I joined MLM Pro three years ago as a skeptical single mom. Today, I've built a team of over 500 distributors and replaced my corporate salary. The training and support system is unmatched in the industry."
}, {
  name: 'Michael Rodriguez',
  role: 'Executive Leader',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  content: 'After 15 years in corporate sales, I was looking for something more fulfilling. MLM Pro gave me the opportunity to build a business on my own terms while helping others achieve their goals. Best decision I ever made.'
}, {
  name: 'Jennifer Wu',
  role: 'Senior Partner',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  content: 'The products sell themselves because they truly work. My customers keep coming back month after month, and my residual income grows steadily. The compensation plan rewards consistency and leadership development.'
}];
const TestimonialsSection = () => {
  return <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from people who have transformed their lives with MLM Pro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#more-testimonials" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;