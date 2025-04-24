
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom">
        <h1 className="section-heading text-center">Contact Us</h1>
        <p className="section-subheading text-center">
          Get in touch with us for any queries or assistance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-prasang-teal w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600">123 Travel Street, Wanderlust City, 400001</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="text-prasang-teal w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">info@prasangtours.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-prasang-teal w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-prasang-teal focus:border-prasang-teal"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-prasang-teal focus:border-prasang-teal"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-prasang-teal focus:border-prasang-teal"
                placeholder="Your message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-prasang-teal text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

