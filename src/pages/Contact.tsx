import React from 'react';
import { Section } from '../components/common';
import { CONTACT_CONTENT } from '../constants/content';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/about/van.jpg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {CONTACT_CONTENT.hero.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            {CONTACT_CONTENT.hero.description}
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-white">
        <div className="max-w-md mx-auto py-24 px-4">
          <div className="w-2 h-2 rounded-full bg-[#ff813a] mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold mb-12 text-center">Australia</h2>
          
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 text-center mb-8">Contact Information</h3>
            <div className="flex flex-col space-y-8">
              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 mt-1.5 text-[#ff813a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="space-y-1">
                  <p className="text-base text-black">ggranger@gmr.com.au</p>
                  <p className="text-base text-black">bgranger@gmr.com.au</p>
                  <p className="text-base text-black">admin@gmr.com.au</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 mt-1.5 text-[#ff813a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-1">
                  <p className="text-base text-black">+61 455 365 528</p>
                  <p className="text-base text-black">+61 455 365 506</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg className="w-5 h-5 mt-1.5 text-[#ff813a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-base text-black">47 Macquarie Street, Gracemere,</p>
                  <p className="text-base text-black">Queensland 4702</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 