
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DestinationCard from '@/components/DestinationCard';

// Sample data for destinations
const allDestinations = [
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
  },
  {
    id: 5,
    name: "Golden Temple Spiritual Journey",
    location: "Amritsar, Punjab",
    image: "https://images.unsplash.com/photo-1442465502170-2f8df42e1b1b?auto=format&fit=crop&w=800&q=80",
    price: 6999,
    rating: 4.8,
    duration: "3 days, 2 nights",
    category: "Spiritual",
    featured: false
  },
  {
    id: 6,
    name: "Ranthambore Wildlife Safari",
    location: "Sawai Madhopur, Rajasthan",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    price: 9999,
    rating: 4.6,
    duration: "4 days, 3 nights",
    category: "Wildlife",
    featured: false
  },
];

const TripPlanner: React.FC = () => {
  // Filter states
  const [budgetRange, setBudgetRange] = useState<number[]>([500, 50000]);
  const [duration, setDuration] = useState<number[]>([1, 15]);
  const [destinationType, setDestinationType] = useState<string>('');
  const [activityType, setActivityType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Mobile filter visibility
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Format price for display
  const formatPrice = (value: number) => {
    return `₹${value.toLocaleString()}`;
  };

  // Filter destinations based on current filters
  const filteredDestinations = allDestinations.filter(destination => {
    return (
      destination.price >= budgetRange[0] &&
      destination.price <= budgetRange[1] &&
      parseInt(destination.duration.split(' ')[0]) >= duration[0] &&
      parseInt(destination.duration.split(' ')[0]) <= duration[1] &&
      (destinationType === '' || destination.category === destinationType) &&
      (activityType === '' || destination.category === activityType) &&
      (searchQuery === '' || 
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-prasang-teal text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Plan Your Perfect Trip</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Use our advanced filters to find the exact trip that matches your preferences and budget.
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg p-4 shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search destinations, cities, or attractions"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Section */}
          <aside className={`w-full md:w-80 bg-white rounded-lg shadow-md p-6 ${showFilters ? 'block' : 'hidden'} md:block h-fit`}>
            <h2 className="text-xl font-semibold mb-6 text-prasang-charcoal">Filter Options</h2>
            
            {/* Budget Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <div className="mb-2">
                <Slider
                  defaultValue={[500, 50000]}
                  max={50000}
                  min={500}
                  step={500}
                  value={budgetRange}
                  onValueChange={setBudgetRange}
                  className="my-4"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatPrice(budgetRange[0])}</span>
                <span>{formatPrice(budgetRange[1])}</span>
              </div>
            </div>
            
            {/* Duration Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
              <div className="mb-2">
                <Slider
                  defaultValue={[1, 15]}
                  max={15}
                  min={1}
                  step={1}
                  value={duration}
                  onValueChange={setDuration}
                  className="my-4"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{duration[0]} {duration[0] === 1 ? 'day' : 'days'}</span>
                <span>{duration[1]} days</span>
              </div>
            </div>
            
            {/* Destination Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination Type</label>
              <Select value={destinationType} onValueChange={setDestinationType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select destination type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="Beach">Beach</SelectItem>
                  <SelectItem value="Mountain">Mountain</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Spiritual">Spiritual</SelectItem>
                  <SelectItem value="Wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Activity Preference */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity Preference</label>
              <Select value={activityType} onValueChange={setActivityType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Activities</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Family">Family</SelectItem>
                  <SelectItem value="Wildlife">Wildlife</SelectItem>
                  <SelectItem value="Spiritual">Spiritual</SelectItem>
                  <SelectItem value="Beaches">Beaches</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Reset Filters */}
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setBudgetRange([500, 50000]);
                setDuration([1, 15]);
                setDestinationType('');
                setActivityType('');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </aside>
          
          {/* Results Section */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-prasang-charcoal">
                {filteredDestinations.length} trips found
              </h2>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map(destination => (
                  <DestinationCard key={destination.id} {...destination} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2 text-prasang-charcoal">No matching trips found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <Button onClick={() => {
                  setBudgetRange([500, 50000]);
                  setDuration([1, 15]);
                  setDestinationType('');
                  setActivityType('');
                  setSearchQuery('');
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
