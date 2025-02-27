import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CAREERS_DATA } from '../constants/careers';

const Careers: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/backgrounds/careers.webp)',
            filter: 'brightness(0.4)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,26,26,0.9), rgba(26,26,26,0.7))'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Join Us
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start a Career with GMR
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600">
                Our business is constantly growing and we are looking for new, experienced people to join our team.
              </p>
            </motion.div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAREERS_DATA.positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group perspective"
              >
                <Link
                  to={`/careers/${position.id}`}
                  className="block h-full"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full 
                    border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    hover:shadow-[0_20px_50px_rgb(255,129,58,0.15)] 
                    transition-all duration-500 relative overflow-hidden 
                    group-hover:-translate-y-2 group-hover:rotate-1">
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 
                      group-hover:from-[#ff813a]/10 group-hover:to-[#ff813a]/5 transition-all duration-500"/>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff813a]/20 to-transparent
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                    
                    {/* Content Container */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#ff813a] 
                          transition-colors duration-300 group-hover:scale-105 transform origin-left">
                          {position.title}
                        </h3>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm 
                          font-medium bg-[#fff4ef] text-[#ff813a] group-hover:bg-[#ff813a] 
                          group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          {position.type}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-6 
                        group-hover:translate-x-2 transition-transform duration-300">
                        <svg className="w-5 h-5 mr-2 text-[#ff813a]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="group-hover:text-[#ff813a] transition-colors duration-300">
                          {position.location}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-8 group-hover:text-gray-700 transition-colors duration-300
                        transform group-hover:scale-[1.02] origin-left">
                        {position.description}
                      </p>

                      <div className="relative flex items-center text-[#ff813a] font-semibold
                        group-hover:text-[#ff813a] transition-all duration-300">
                        Learn more
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-3 
                            transition-all duration-300 group-hover:scale-110"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                        <div className="h-[2px] bg-gradient-to-r from-[#ff813a] to-[#ff9f5a] 
                          absolute bottom-0 left-0 w-12 group-hover:w-full transition-all 
                          duration-500 ease-in-out"/>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 