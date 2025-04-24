
import React from 'react';
import DestinationCard from './DestinationCard';

// Sample data for destinations
const destinations = [
  {
    id: 1,
    name: "Exotic Goa Beach Retreat",
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    price: 8999,
    rating: 4.8,
    duration: "4 days, 3 nights",
    category: "Beach",
    featured: true
  },
  {
    id: 2,
    name: "Himalayan Adventure Trek",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    price: 12499,
    rating: 4.9,
    duration: "6 days, 5 nights",
    category: "Adventure",
    featured: true
  },
  {
    id: 3,
    name: "Taj Mahal Heritage Tour",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    price: 5999,
    rating: 4.7,
    duration: "2 days, 1 night",
    category: "Historical",
    featured: false
  },
  {
    id: 4,
    name: "Kashmir Valley Expedition",
    location: "Srinagar, Kashmir",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80",
    price: 15999,
    rating: 4.9,
    duration: "7 days, 6 nights",
    category: "Nature",
    featured: false
  }
];

const FeaturedDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Popular Destinations</h2>
          <p className="section-subheading">
            Explore our handpicked destinations for unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(destination => (
            <DestinationCard 
              key={destination.id}
              {...destination}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="btn-primary">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
