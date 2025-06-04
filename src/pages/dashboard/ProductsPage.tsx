import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ShoppingCartIcon } from 'lucide-react';
const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // Mock data for products
  const products = [{
    id: 1,
    name: 'Wellness Essential Pack',
    category: 'Wellness',
    price: 99.95,
    wholesalePrice: 69.95,
    pv: 70,
    image: 'https://images.unsplash.com/photo-1556229174-5e42a09e40c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Complete daily supplement package for optimal health and wellbeing.',
    stock: 'In Stock'
  }, {
    id: 2,
    name: 'Energy Boost Formula',
    category: 'Wellness',
    price: 45.99,
    wholesalePrice: 32.2,
    pv: 30,
    image: 'https://images.unsplash.com/photo-1624454002302-52288334125a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Natural energy enhancer without the crash, perfect for busy professionals.',
    stock: 'In Stock'
  }, {
    id: 3,
    name: 'Skin Renewal System',
    category: 'Beauty',
    price: 129.99,
    wholesalePrice: 90.99,
    pv: 85,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Complete skincare regimen for radiant, youthful-looking skin.',
    stock: 'In Stock'
  }, {
    id: 4,
    name: 'Weight Management Program',
    category: 'Wellness',
    price: 89.95,
    wholesalePrice: 62.97,
    pv: 60,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Science-backed weight management solution for sustainable results.',
    stock: 'In Stock'
  }, {
    id: 5,
    name: 'Advanced Anti-Aging Serum',
    category: 'Beauty',
    price: 79.99,
    wholesalePrice: 55.99,
    pv: 50,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Powerful anti-aging formula with peptides and antioxidants.',
    stock: 'Low Stock'
  }, {
    id: 6,
    name: 'Home Essentials Kit',
    category: 'Home',
    price: 149.95,
    wholesalePrice: 104.97,
    pv: 100,
    image: 'https://images.unsplash.com/photo-1584473457493-17c4c25ce165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Eco-friendly household products for a cleaner, greener home.',
    stock: 'In Stock'
  }, {
    id: 7,
    name: 'Performance Protein',
    category: 'Fitness',
    price: 59.99,
    wholesalePrice: 41.99,
    pv: 40,
    image: 'https://images.unsplash.com/photo-1612778992781-b44379698c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Premium protein blend for muscle recovery and growth.',
    stock: 'In Stock'
  }, {
    id: 8,
    name: 'Brain Focus Formula',
    category: 'Wellness',
    price: 54.95,
    wholesalePrice: 38.47,
    pv: 35,
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Nootropic supplement to enhance mental clarity and focus.',
    stock: 'Out of Stock'
  }];
  const categories = ['All', 'Wellness', 'Beauty', 'Fitness', 'Home'];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(product => product.category === activeCategory);
  return <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Products Catalog
      </h1>
      {/* Search and Filter */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-96">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Search products..." />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FilterIcon className="h-4 w-4 mr-2 text-gray-500" />
                Filter
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Sort by: Newest
              </button>
            </div>
          </div>
          {/* Categories */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>)}
            </div>
          </div>
        </div>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-purple-600">{product.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500">
                    ${product.wholesalePrice.toFixed(2)} wholesale
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500 h-10 overflow-hidden">
                {product.description}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">PV: </span>
                  <span className="text-gray-600">{product.pv}</span>
                </div>
                {product.stock === 'In Stock' ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span> : product.stock === 'Low Stock' ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Low Stock
                  </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Out of Stock
                  </span>}
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Details
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {/* Empty state if no products match filter */}
      {filteredProducts.length === 0 && <div className="bg-white rounded-lg shadow p-8 text-center">
          <div className="text-gray-500 mb-4">
            No products found in this category.
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700" onClick={() => setActiveCategory('All')}>
            View All Products
          </button>
        </div>}
    </div>;
};
export default ProductsPage;