
import React from 'react';
import { MapPin, Mountain, Umbrella, Landmark, Users, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  link: string;
  color: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon, title, count, link, color }) => (
  <Link to={link} className="flex flex-col items-center group">
    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 ${color} text-white transition-transform group-hover:scale-110`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-prasang-charcoal mb-1">{title}</h3>
    <p className="text-gray-500 text-sm">{count} Packages</p>
  </Link>
);

const TravelCategories: React.FC = () => {
  const categories = [
    {
      icon: <Mountain size={32} />,
      title: "Mountains",
      count: 24,
      link: "/category/mountains",
      color: "bg-blue-600"
    },
    {
      icon: <Umbrella size={32} />,
      title: "Beaches",
      count: 18,
      link: "/category/beaches",
      color: "bg-orange-500"
    },
    {
      icon: <Landmark size={32} />,
      title: "Heritage",
      count: 32,
      link: "/category/heritage",
      color: "bg-amber-700"
    },
    {
      icon: <Users size={32} />,
      title: "Family",
      count: 15,
      link: "/category/family",
      color: "bg-green-600"
    },
    {
      icon: <Camera size={32} />,
      title: "Wildlife",
      count: 12,
      link: "/category/wildlife",
      color: "bg-emerald-600"
    },
    {
      icon: <MapPin size={32} />,
      title: "Pilgrimage",
      count: 8,
      link: "/category/pilgrimage",
      color: "bg-purple-600"
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Explore By Category</h2>
          <p className="section-subheading">
            Choose from various travel categories that match your interests
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
