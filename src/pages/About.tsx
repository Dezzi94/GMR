import React from 'react';
import { motion } from 'framer-motion';
import CareersSection from '../components/CareersSection';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/hero/gmrhosevan.jpg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About GMR
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in mechanical solutions.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We are a leading firm specialising in{' '}
                <span className="text-[#ff813a] block mt-2">
                  Mechanical Services for Mining, Rural, and Civil Sectors
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 70 years combined experience in Australia, China and New Guinea, GMR is a trusted name in providing high-quality mechanical services tailored to the unique needs of the mining, rural, and civil industries. From cost-effective solutions to highly effective service, our team is dedicated to delivering exceptional results on every project.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff813a]" />
                  <span className="text-lg font-medium text-gray-800">Cost-Efficient Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff813a]" />
                  <span className="text-lg font-medium text-gray-800">Experienced Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff813a]" />
                  <span className="text-lg font-medium text-gray-800">High-Impact Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff813a]" />
                  <span className="text-lg font-medium text-gray-800">Friendly, Reliable Service</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src="/assets/images/about/van.jpg"
                alt="GMR Service Vehicle"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Distributor Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Authorised Distributor
            </h2>
            <p className="text-lg text-gray-600">
              We are proud to be an authorised distributor for industry-leading products and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Categories */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                JSG and SKF/Lincoln Products
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">JSG and Lincoln auto lube systems – Supply and repair - Fitted to most machines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">JSG and Lincoln lubrication products – Supply and repair - Fitted to most machines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">Lincoln grease injectors</span>
                </li>
              </ul>
            </div>

            {/* Additional Products */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Industrial Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">Industrial hose reels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">Fixed plant lubrication systems and components</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#ff813a]" />
                  <span className="text-lg text-gray-700">Instrumentation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
              <div className="group flex items-center justify-center h-20 w-full bg-gray-800 rounded-xl px-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/williamsIndustrial-logo.png" alt="Williams Tools" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/penritelogo.png" alt="Penrite Oils" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/continentallogo.svg" alt="Continental" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/barlogo.svg" alt="BAR Pressure Cleaners" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/staufflogo.svg" alt="Stauff" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/conitechaustraliaptdlogo.png" alt="ConiTech Australia Pty Ltd" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/banlawlogo.gif" alt="Banlaw – Fluid Asset Intelligence" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/LHAlogo.png" alt="Authorised Labour Hire Provider" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                <img src="/assets/images/about/capricornlogo.svg" alt="Capricorn Society Member" className="max-h-12 w-auto object-contain transition-transform duration-300" />
              </div>
              <div className="group flex items-center justify-center h-20 w-full bg-white rounded-xl px-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#ff813a]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <a href="https://powertorq.com.au/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <img src="/assets/images/about/powertorquelogo.png" alt="PowerTorq Partner" className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <CareersSection />
    </div>
  );
};

export default About; 