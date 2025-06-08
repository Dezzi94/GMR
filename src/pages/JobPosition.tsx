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
              <p className="text-gray-500 text-sm mb-6">
                Note: GMR is an Approved Standard Business Sponsor - this position is open to both Australian Residents and Migrant Workers.
              </p>
              <button 
                onClick={() => {
                  window.location.href = 'mailto:admin@gmr1.com.au';
                }}
                className="w-full bg-[#ff813a] text-white py-3 px-6 rounded-lg 
                  hover:bg-[#ff9f5a] transition-colors duration-300 font-medium text-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default JobPosition; 