import React, { useState } from 'react';
import { PlayIcon, BookOpenIcon, AwardIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
const TrainingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // Mock data for training courses
  const courses = [{
    id: 1,
    title: 'Getting Started with MLM Pro',
    category: 'Beginner',
    duration: '45 min',
    lessons: 5,
    progress: 100,
    completed: true,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 2,
    title: 'Product Knowledge Certification',
    category: 'Product',
    duration: '2 hours',
    lessons: 8,
    progress: 75,
    completed: false,
    image: 'https://images.unsplash.com/photo-1556229174-5e42a09e40c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 3,
    title: 'Building Your Network',
    category: 'Business',
    duration: '1.5 hours',
    lessons: 6,
    progress: 50,
    completed: false,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 4,
    title: 'Social Media Marketing Mastery',
    category: 'Marketing',
    duration: '3 hours',
    lessons: 12,
    progress: 25,
    completed: false,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 5,
    title: 'Advanced Leadership Development',
    category: 'Leadership',
    duration: '4 hours',
    lessons: 10,
    progress: 0,
    completed: false,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 6,
    title: 'Compensation Plan Mastery',
    category: 'Business',
    duration: '1 hour',
    lessons: 4,
    progress: 100,
    completed: true,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }];
  const categories = ['All', 'Beginner', 'Product', 'Business', 'Marketing', 'Leadership'];
  const filteredCourses = activeCategory === 'All' ? courses : courses.filter(course => course.category === activeCategory);
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Training Center
      </h1>
      {/* Training Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpenIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Courses Enrolled
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      6 courses
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Completed Courses
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      2 courses
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Learning Time
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      8.5 hours
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AwardIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Certifications
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      1 earned
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Continue Learning */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Continue Learning
          </h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556229174-5e42a09e40c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Product Knowledge Certification" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-3">
                    <PlayIcon className="h-8 w-8 text-purple-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Product Knowledge Certification
              </h3>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                  Product
                </span>
                <span className="text-sm text-gray-500">
                  6 of 8 lessons completed
                </span>
              </div>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>75% complete</span>
                  <span>1.5 hours left</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Master our complete product line with this comprehensive
                certification course. Learn key benefits, ingredients, and how
                to effectively communicate product value to customers.
              </p>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                Continue Course
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Course Catalog */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Course Catalog</h2>
        </div>
        <div className="p-6">
          {/* Categories */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>)}
            </div>
          </div>
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => <div key={course.id} className="border rounded-lg overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  {course.completed && <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    </div>}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${course.category === 'Beginner' ? 'bg-green-100 text-green-800' : course.category === 'Product' ? 'bg-blue-100 text-blue-800' : course.category === 'Business' ? 'bg-yellow-100 text-yellow-800' : course.category === 'Marketing' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'} mr-2`}>
                      {course.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${course.completed ? 'bg-green-500' : 'bg-purple-600'}`} style={{
                    width: `${course.progress}%`
                  }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 text-right">
                      {course.progress}% complete
                    </div>
                  </div>
                  <button className={`w-full py-2 px-4 rounded-md text-sm font-medium ${course.completed ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                    {course.completed ? 'Review Course' : course.progress > 0 ? 'Continue Course' : 'Start Course'}
                  </button>
                </div>
              </div>)}
          </div>
          {/* Empty state if no courses match filter */}
          {filteredCourses.length === 0 && <div className="bg-gray-50 rounded-lg p-8 text-center">
              <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                There are no courses in the {activeCategory} category at the
                moment.
              </p>
              <div className="mt-6">
                <button onClick={() => setActiveCategory('All')} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                  View All Courses
                </button>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default TrainingPage;