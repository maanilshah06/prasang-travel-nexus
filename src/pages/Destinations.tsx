
import React from 'react';
import FeaturedDestinations from '@/components/FeaturedDestinations';

const Destinations = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <h1 className="section-heading text-center">Explore Our Destinations</h1>
        <p className="section-subheading text-center">
          Discover breathtaking locations and unforgettable experiences
        </p>
        <FeaturedDestinations />
      </div>
    </div>
  );
};

export default Destinations;

