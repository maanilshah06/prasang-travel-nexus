
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "Our trip to Kerala was absolutely amazing! Prasang Tours planned everything perfectly, from the beautiful houseboat stay to the tea plantation visits. The local guides were knowledgeable and friendly.",
    rating: 5,
    trip: "Kerala Backwaters Tour"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    content: "The Ladakh trip was a life-changing experience. I was worried about the altitude, but the team ensured we had proper acclimatization. The itinerary was flexible and they accommodated all our requests.",
    rating: 5,
    trip: "Ladakh Adventure"
  },
  {
    id: 3,
    name: "Ananya Desai",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    content: "As a solo female traveler, safety was my priority. Prasang Tours made sure I felt safe throughout my Rajasthan trip. The hotels were excellent and the driver was very professional.",
    rating: 4,
    trip: "Rajasthan Heritage Tour"
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-prasang-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Travelers Say</h2>
          <p className="section-subheading">
            Real experiences from people who have traveled with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-prasang-teal" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-prasang-teal" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* User Image */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-prasang-charcoal">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonials[currentIndex].rating ? "text-yellow-500 fill-current" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <blockquote className="text-lg italic text-gray-600">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-prasang-teal font-medium">
                    Trip: {testimonials[currentIndex].trip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-prasang-teal w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
