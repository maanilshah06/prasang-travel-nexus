
import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Star, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This should match the data structure in FeaturedDestinations
interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
  category: string;
  description?: string;
  featured?: boolean;
  highlights?: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Exotic Goa Beach Retreat",
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    price: 8999,
    rating: 4.8,
    duration: "4 days, 3 nights",
    category: "Beach",
    description: "Experience the perfect blend of sun, sand, and sea in Goa. This beach retreat offers a perfect escape with pristine beaches, vibrant nightlife, and rich Portuguese heritage.",
    highlights: [
      "Private beach access",
      "Water sports activities",
      "Heritage tours",
      "Local cuisine experiences",
      "Sunset cruise"
    ],
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
    description: "Embark on an unforgettable journey through the majestic Himalayas. Trek through scenic trails, experience local culture, and witness breathtaking mountain views.",
    highlights: [
      "Guided mountain treks",
      "Camping under stars",
      "Local village visits",
      "Adventure sports",
      "Photography sessions"
    ],
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
    description: "Discover the timeless beauty of the Taj Mahal and explore the rich Mughal heritage of Agra. This tour combines luxury with historical exploration.",
    highlights: [
      "Sunrise Taj Mahal visit",
      "Agra Fort tour",
      "Local craft workshops",
      "Heritage walk",
      "Traditional cuisine"
    ],
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
    description: "Experience the paradise on Earth with this comprehensive Kashmir valley tour. From houseboats to hill stations, create memories that last a lifetime.",
    highlights: [
      "Houseboat stay",
      "Pahalgam visit",
      "Gondola ride",
      "Mughal gardens tour",
      "Traditional Kashmiri cuisine"
    ],
  }
];

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === Number(id));

  if (!destination) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container-custom">
          <h1 className="text-2xl font-bold text-center">Destination not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center text-white gap-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" />
                <span>{destination.rating} / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About This Destination</h2>
                <p className="text-gray-700 mb-6">{destination.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Package className="w-5 h-5 mr-2 text-prasang-teal shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-prasang-teal">
                    ₹{destination.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>{destination.duration}</span>
                </div>
                
                <Badge className="mb-6" variant="secondary">
                  {destination.category}
                </Badge>

                <button className="w-full btn-primary">
                  Book Now
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
