import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAREERS_DATA, JobPosition as JobPositionType } from '../constants/careers';

const JobPosition: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const position = CAREERS_DATA.positions.find((p: JobPositionType) => p.id === id);
  
  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Position not found</h1>
          <p className="text-gray-600">This position does not exist.</p>
          <Link to="/careers" className="text-accent hover:text-accent-dark mt-4 inline-block">
            Return to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#ff813a]">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-[#ff813a]">Careers</Link>
            <span>/</span>
            <span className="text-gray-900">{position.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {position && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{position.title}</h1>
              <div className="flex flex-wrap gap-4 text-lg text-gray-600">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#ff813a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {position.type}
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#ff813a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {position.location}
                </span>
                {position.hours && (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#ff813a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {position.hours}
                  </span>
                )}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">{position.description}</p>
            </div>

            {position.benefits && position.benefits.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">We Offer</h2>
                <ul className="space-y-3">
                  {position.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {position.responsibilities && position.responsibilities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {position.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-600 text-lg">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {position.qualifications && position.qualifications.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Qualifications</h2>
                <ul className="space-y-3">
                  {position.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-lg">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
              <p className="text-gray-600 text-lg mb-6">
                Please email your cover letter and current resume (including any relevant certificates/licences) to{' '}
                <a href="mailto:admin@gmr1.com.au" className="text-[#ff813a] hover:text-[#ff9a5f]">
                  admin@gmr1.com.au
                </a>
              </p>
              <p className="text-gray-500 text-sm">
                Note: GMR is an Approved Standard Business Sponsor - this position is open to both Australian Residents and Migrant Workers.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {position.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  {position.description}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3 mb-8">
                  {position.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifications</h2>
                <ul className="space-y-3 mb-8">
                  {position.qualifications.map((qualification: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{qualification}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3 mb-8">
                  {position.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-[#ff813a] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg sticky top-8">
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="text-gray-900">{position.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Employment Type</h3>
                  <p className="text-gray-900">{position.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Working Hours</h3>
                  <p className="text-gray-900">{position.hours}</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  // Handle apply action
                  console.log('Apply for position:', position.title);
                }}
                className="w-full bg-[#ff813a] text-white py-3 px-6 rounded-lg 
                  hover:bg-[#ff9f5a] transition-colors duration-300 font-medium text-lg"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Positions */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREERS_DATA.positions
              .filter((p: JobPositionType) => p.id !== position.id)
              .slice(0, 3)
              .map((relatedPosition: JobPositionType, index: number) => (
                <motion.div
                  key={relatedPosition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/careers/${relatedPosition.id}`}
                    className="block bg-white rounded-xl p-6 h-full border border-gray-100 
                      shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {relatedPosition.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs 
                        font-medium bg-[#ff813a] text-white">
                        {relatedPosition.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {relatedPosition.location}
                    </div>

                    <p className="text-gray-600 line-clamp-3">
                      {relatedPosition.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosition; 