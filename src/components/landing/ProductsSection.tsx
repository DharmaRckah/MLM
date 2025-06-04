import React from 'react';
const products = [{
  name: 'Wellness Essential Pack',
  price: '$99.95',
  image: 'https://images.unsplash.com/photo-1556229174-5e42a09e40c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  description: 'Our flagship wellness package with essential supplements for optimal health.'
}, {
  name: 'Energy Boost Formula',
  price: '$45.99',
  image: 'https://images.unsplash.com/photo-1624454002302-52288334125a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  description: 'Natural energy enhancer without the crash, perfect for busy professionals.'
}, {
  name: 'Skin Renewal System',
  price: '$129.99',
  image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  description: 'Complete skincare regimen for radiant, youthful-looking skin.'
}, {
  name: 'Weight Management Program',
  price: '$89.95',
  image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  description: 'Science-backed weight management solution for sustainable results.'
}];
const ProductsSection = () => {
  return <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Premium Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            High-quality products that customers love and keep coming back for.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-bold">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 border border-purple-600 rounded text-purple-600 hover:bg-purple-600 hover:text-white transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#all-products" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
            View All Products
          </a>
        </div>
      </div>
    </section>;
};
export default ProductsSection;