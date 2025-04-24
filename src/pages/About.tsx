
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <h1 className="section-heading text-center">About Prasang Tours</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Prasang Tours, your trusted partner in creating memorable travel experiences. 
            We specialize in crafting personalized journeys that cater to your unique preferences and budget.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experienced travel experts is dedicated to ensuring every detail of your trip 
            is perfectly planned, allowing you to focus on making lasting memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-prasang-cream rounded-lg">
              <h3 className="text-xl font-semibold text-prasang-teal mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To make travel accessible and enjoyable for everyone by providing affordable, 
                well-planned, and hassle-free tour packages.
              </p>
            </div>
            <div className="p-6 bg-prasang-cream rounded-lg">
              <h3 className="text-xl font-semibold text-prasang-teal mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted name in travel planning, known for our personalized service 
                and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

