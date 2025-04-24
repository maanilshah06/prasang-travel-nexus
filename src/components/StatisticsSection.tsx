
import React from 'react';
import { Heart, Award, Globe, Users } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const StatItem: React.FC<StatProps> = ({ icon, count, label }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4 text-prasang-orange">
      {icon}
    </div>
    <h3 className="text-3xl sm:text-4xl font-bold text-prasang-teal mb-2">{count}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem 
            icon={<Heart size={40} />}
            count="10,000+"
            label="Happy Travelers"
          />
          <StatItem 
            icon={<Award size={40} />}
            count="200+"
            label="Custom Tours"
          />
          <StatItem 
            icon={<Globe size={40} />}
            count="50+"
            label="Destinations"
          />
          <StatItem 
            icon={<Users size={40} />}
            count="24/7"
            label="Customer Support"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
