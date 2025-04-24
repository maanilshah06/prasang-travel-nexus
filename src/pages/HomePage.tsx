
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TravelCategories from '@/components/TravelCategories';
import TestimonialSection from '@/components/TestimonialSection';
import StatisticsSection from '@/components/StatisticsSection';
import CallToAction from '@/components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TravelCategories />
      <FeaturedDestinations />
      <TestimonialSection />
      <StatisticsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;
