
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <MapPin size={100} className="text-prasang-teal opacity-20" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-prasang-teal">
              404
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-prasang-charcoal mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. The path{" "}
          <span className="font-semibold text-prasang-teal">
            {location.pathname}
          </span>{" "}
          doesn't exist on our site.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-prasang-teal hover:bg-opacity-90 inline-flex items-center">
              <Home size={18} className="mr-2" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
