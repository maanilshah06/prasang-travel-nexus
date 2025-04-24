
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-prasang-teal text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Dream Vacation?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip tailored to your preferences and budget. 
            Speak with our travel experts today!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-prasang-gold hover:bg-opacity-90 text-prasang-charcoal text-lg px-8 py-6">
              Start Planning Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Phone className="mr-2" size={18} />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
