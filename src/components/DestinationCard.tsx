
import React from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
  category: string;
  featured?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  location,
  image,
  price,
  rating,
  duration,
  category,
  featured = false
}) => {
  return (
    <Link to={`/destination/${id}`}>
      <div className={`relative rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'border-2 border-prasang-gold' : ''}`}>
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
          {/* Badge */}
          <Badge className="absolute top-3 left-3 bg-prasang-gold text-prasang-charcoal font-medium">
            {category}
          </Badge>
          
          {/* Featured Tag */}
          {featured && (
            <div className="absolute top-3 right-3 bg-prasang-orange text-white text-xs font-bold px-2 py-1 rounded">
              FEATURED
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 bg-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-prasang-charcoal truncate">{name}</h3>
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-3 text-gray-500">
            <MapPin size={14} />
            <span className="ml-1 text-sm truncate">{location}</span>
          </div>
          
          <div className="flex items-center mb-3 text-gray-500">
            <Calendar size={14} />
            <span className="ml-1 text-sm">{duration}</span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-prasang-teal font-bold">
              ₹{price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500">per person</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
