
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prasang-teal text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-200 mb-6">Subscribe to receive updates on new destinations, travel tips, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
            />
            <Button className="bg-prasang-gold hover:bg-opacity-90 text-prasang-charcoal">
              <Send size={18} className="mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="font-bold text-2xl text-white">Prasang</span>
              <span className="font-medium text-lg text-prasang-gold ml-1">Tours</span>
            </div>
            <p className="text-gray-200 mb-4">Your Journey, Our Planning. We create memorable experiences through customized and affordable travel solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-prasang-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-prasang-gold transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-prasang-gold transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-prasang-gold transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-prasang-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-200 hover:text-white transition">About Us</Link></li>
              <li><Link to="/destinations" className="text-gray-200 hover:text-white transition">Destinations</Link></li>
              <li><Link to="/planner" className="text-gray-200 hover:text-white transition">Trip Planner</Link></li>
              <li><Link to="/blog" className="text-gray-200 hover:text-white transition">Travel Blog</Link></li>
              <li><Link to="/become-partner" className="text-gray-200 hover:text-white transition">Become a Partner</Link></li>
              <li><Link to="/faq" className="text-gray-200 hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Travel Types */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-prasang-gold">Travel Types</h4>
            <ul className="space-y-2">
              <li><Link to="/travel-type/adventure" className="text-gray-200 hover:text-white transition">Adventure Tours</Link></li>
              <li><Link to="/travel-type/family" className="text-gray-200 hover:text-white transition">Family Vacations</Link></li>
              <li><Link to="/travel-type/wildlife" className="text-gray-200 hover:text-white transition">Wildlife Expeditions</Link></li>
              <li><Link to="/travel-type/spiritual" className="text-gray-200 hover:text-white transition">Spiritual Journeys</Link></li>
              <li><Link to="/travel-type/beach" className="text-gray-200 hover:text-white transition">Beach Getaways</Link></li>
              <li><Link to="/travel-type/mountain" className="text-gray-200 hover:text-white transition">Mountain Escapes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-prasang-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-prasang-gold" />
                <span className="text-gray-200">123 Travel Street, Tourism City, India - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-prasang-gold" />
                <span className="text-gray-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-prasang-gold" />
                <span className="text-gray-200">info@prasangtours.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8 text-sm text-center md:text-left md:flex md:justify-between">
          <p>&copy; 2025 Prasang Tours & Travel Planners. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="text-gray-200 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-200 hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-200 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
