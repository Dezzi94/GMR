import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Location {
  id: number;
  name: string;
  description: string;
  industry: string;
  coordinates: { x: number; y: number };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Brisbane",
    description: "Main headquarters and service centre",
    industry: "Engineering",
    coordinates: { x: 75, y: 65 }
  },
  {
    id: 2,
    name: "Gold Coast",
    description: "Regional service hub",
    industry: "Construction",
    coordinates: { x: 85, y: 75 }
  },
  {
    id: 3,
    name: "Sunshine Coast",
    description: "Equipment and maintenance facility",
    industry: "Mining",
    coordinates: { x: 65, y: 45 }
  },
  {
    id: 4,
    name: "Toowoomba",
    description: "Mining solutions center",
    industry: "Mining",
    coordinates: { x: 45, y: 55 }
  },
  {
    id: 5,
    name: "Mackay",
    description: "Industrial operations base",
    industry: "Engineering",
    coordinates: { x: 35, y: 35 }
  }
];

const ServiceLocationsSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [isHoveringMap, setIsHoveringMap] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our services around{" "}
              <span className="text-[#ff813a]">Queensland</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With strategic locations across Queensland, we provide comprehensive mechanical solutions 
              to mining, rural, and civil sectors. Our network ensures rapid response times and 
              efficient service delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#ff813a] text-white rounded-lg 
                hover:bg-[#ff9f5a] transition-all duration-300 group"
            >
              <span className="font-semibold">Contact Us</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsHoveringMap(true)}
            onMouseLeave={() => setIsHoveringMap(false)}
          >
            {/* Map Container */}
            <div className="relative aspect-[16/9] bg-white rounded-2xl overflow-visible transform perspective-1000 rotate-x-1 hover:rotate-x-2 transition-transform duration-500">
              <div className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] transform-gpu"></div>
              <img
                src="/assets/images/about/locationmap.webp"
                alt="Queensland Service Locations"
                className="w-full h-full object-contain bg-white rounded-2xl relative z-10"
              />
              
              {/* Location Points */}
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  className="absolute z-20"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                  }}
                  initial={false}
                  animate={{
                    scale: activeLocation?.id === location.id ? 1.2 : 1,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setActiveLocation(location)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute -inset-4 bg-black/20 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: [0.8, 1.2, 0.8], 
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Location Point */}
                    <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] relative">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-800 whitespace-nowrap bg-white px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                        {location.industry}
                      </span>
                    </div>

                    {/* Location Info Tooltip */}
                    <AnimatePresence>
                      {activeLocation?.id === location.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 bottom-full mb-8 -translate-x-1/2 w-48 bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-4 z-30"
                          style={{
                            minWidth: "180px",
                            transform: "translate(-50%, -100%)"
                          }}
                        >
                          <div className="text-[#ff813a] font-semibold mb-1">
                            {location.name}
                          </div>
                          <div className="text-xs font-medium text-gray-600 mb-2">
                            {location.industry}
                          </div>
                          <div className="text-sm text-gray-700">
                            {location.description}
                          </div>
                          {/* Arrow */}
                          <div className="absolute left-1/2 bottom-0 w-3 h-3 bg-white transform rotate-45 translate-y-1/2 -translate-x-1/2 shadow-[2px_2px_8px_rgba(0,0,0,0.08)]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}

              {/* Map Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHoveringMap ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#ff813a]/20 rounded-2xl transform rotate-12 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-[#ff813a]/10 rounded-2xl transform -rotate-12 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLocationsSection; 