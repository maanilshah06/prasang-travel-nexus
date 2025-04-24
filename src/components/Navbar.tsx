
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-prasang-teal font-bold text-2xl">Prasang</span>
            <span className="text-prasang-orange font-medium text-lg">Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-prasang-charcoal hover:text-prasang-teal font-medium">Home</Link>
            <Link to="/destinations" className="text-prasang-charcoal hover:text-prasang-teal font-medium">Destinations</Link>
            <Link to="/planner" className="text-prasang-charcoal hover:text-prasang-teal font-medium">Trip Planner</Link>
            <Link to="/about" className="text-prasang-charcoal hover:text-prasang-teal font-medium">About Us</Link>
            <Link to="/blog" className="text-prasang-charcoal hover:text-prasang-teal font-medium">Blog</Link>
            <Link to="/contact" className="text-prasang-charcoal hover:text-prasang-teal font-medium">Contact</Link>
          </div>

          {/* User & Search Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-prasang-charcoal hover:text-prasang-teal hover:bg-gray-100">
              <Search size={20} />
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-prasang-teal text-prasang-teal hover:bg-prasang-teal hover:text-white">
              <User size={18} />
              <span>Login</span>
            </Button>
            <Button className="bg-prasang-orange hover:bg-prasang-gold text-white">
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-prasang-charcoal">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">Home</Link>
              <Link to="/destinations" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">Destinations</Link>
              <Link to="/planner" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">Trip Planner</Link>
              <Link to="/about" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">About Us</Link>
              <Link to="/blog" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">Blog</Link>
              <Link to="/contact" className="text-prasang-charcoal hover:text-prasang-teal font-medium py-2">Contact</Link>
              
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-prasang-teal text-prasang-teal">
                  <User size={18} />
                  <span>Login</span>
                </Button>
                <Button className="w-full bg-prasang-orange hover:bg-prasang-gold text-white">
                  Start Planning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

