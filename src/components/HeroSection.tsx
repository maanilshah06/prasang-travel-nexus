
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-cover bg-center flex items-center" 
         style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')" 
         }}>
      <div className="container-custom text-white text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
          Your Journey, <span className="text-prasang-gold">Our Planning</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-slide-down" style={{ animationDelay: "0.2s" }}>
          Discover affordable and customizable travel experiences to the world's most beautiful destinations.
        </p>
        <div className="animate-slide-down" style={{ animationDelay: "0.4s" }}>
          <Link to="/planner">
            <Button size="lg" className="bg-prasang-orange hover:bg-prasang-gold text-white font-semibold px-8 py-6 text-lg">
              Start Planning
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center bg-white/20 rounded-md px-3">
              <MapPin size={24} className="text-prasang-gold" />
              <Input 
                type="text" 
                placeholder="Where do you want to go?" 
                className="border-none bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button className="bg-prasang-gold hover:bg-opacity-90 text-prasang-charcoal flex items-center gap-2 px-6">
              <Search size={18} />
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
