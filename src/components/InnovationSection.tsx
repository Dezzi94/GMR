import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InnovationSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[60vh] bg-cover bg-center bg-fixed text-white flex items-center"
      style={{
        backgroundImage: "url('/assets/images/backgrounds/crane.webp')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white text-shadow">
            Driven by Innovation,{" "}
            <span className="block mt-2">Ready for Any Challenge</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#ff813a] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff9a5f] transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;

// Add this to your global CSS or tailwind.config.js
// .text-shadow {
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
// } 