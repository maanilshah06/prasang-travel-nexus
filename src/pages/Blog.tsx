
import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <h1 className="section-heading text-center">Travel Blog</h1>
        <p className="section-subheading text-center">
          Explore travel tips, destination guides, and inspiring stories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Sample blog posts - replace with dynamic content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Blog post" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-prasang-charcoal mb-2">
                Top 10 Hidden Beaches in India
              </h3>
              <p className="text-gray-600 mb-4">
                Discover secluded paradises away from the tourist crowds...
              </p>
              <button className="text-prasang-teal hover:text-prasang-orange font-medium">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

