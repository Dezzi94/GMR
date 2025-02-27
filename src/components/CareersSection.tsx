import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CAREERS_DATA } from '../constants/careers';

const CareersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[2.5rem] font-bold mb-6">
            Start a Career with <span className="text-[#ff813a]">GMR</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our business is constantly growing and we are looking for new, experienced people to join our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CAREERS_DATA.positions.slice(0, 3).map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group perspective"
            >
              <Link to={`/careers/${position.id}`} className="block">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100/50
                  group-hover:shadow-[0_8px_30px_rgb(255,129,58,0.2)] 
                  group-hover:-translate-y-1 group-hover:border-[#ff813a]/20
                  transition-all duration-500 ease-out relative overflow-hidden
                  group-hover:rotate-1">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff813a]/0 via-[#ff813a]/20 to-[#ff813a]/0 
                    opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full 
                    transition-all duration-1000 ease-out"/>
                  
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"/>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-4">
                      <svg className="w-4 h-4 text-[#ff813a] transform group-hover:scale-110 
                        transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-[#ff813a] transition-colors duration-300">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs 
                        font-medium bg-[#ff813a] text-white ml-auto transform group-hover:scale-110 
                        transition-transform duration-500 group-hover:shadow-lg">
                        {position.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transform 
                      group-hover:translate-x-1 group-hover:text-[#ff813a] transition-all duration-300
                      group-hover:tracking-wide">
                      {position.title}
                    </h3>

                    <p className="text-gray-600 mb-6 transform group-hover:translate-x-1 
                      transition-transform duration-300 group-hover:text-gray-700">
                      {position.description}
                    </p>

                    <ul className="space-y-3">
                      {position.qualifications.slice(0, 2).map((qualification, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 transform 
                          group-hover:translate-x-1 transition-transform duration-300 group-hover:text-gray-700"
                          style={{ transitionDelay: `${idx * 100}ms` }}>
                          <svg className="w-4 h-4 mr-2 text-[#ff813a] transform group-hover:scale-110 
                            transition-transform duration-500 group-hover:rotate-12" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/careers"
            className="group relative inline-flex items-center justify-center px-8 py-4 
              bg-[#ff813a] text-white rounded-lg overflow-hidden font-medium
              hover:shadow-[0_8px_30px_rgb(255,129,58,0.4)] transition-shadow duration-500"
          >
            {/* Ripple effect */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full 
              group-hover:w-[300px] group-hover:h-[300px] opacity-10"/>
            
            {/* Sliding background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff813a] via-[#ffa35d] to-[#ff813a]
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"/>
            
            <span className="relative flex items-center">
              <span className="relative z-10 flex items-center transform group-hover:scale-110 transition-transform duration-500">
                View All Positions
                <svg
                  className="w-5 h-5 ml-2 transform transition-all duration-300 
                    group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersSection; 