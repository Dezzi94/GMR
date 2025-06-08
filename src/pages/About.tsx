import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="relative bg-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-orange-50/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff813a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Authorised Distributor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to be an authorised distributor for industry-leading products and solutions, 
              ensuring our clients receive genuine, high-quality equipment and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* JSG and Lincoln Products */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#ff813a]/30 hover:-translate-y-2">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  JSG and SKF/Lincoln Products
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff813a] to-orange-600 rounded-full mx-auto shadow-sm"></div>
              </div>
              
              {/* Clean Logos Section */}
              <div className="relative mb-10 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100/50 shadow-inner">
                <div className="flex justify-center items-center gap-12">
                  <div className="group/logo">
                    <img src="/assets/images/about/jsglogo.png" alt="JSG" className="h-16 w-auto object-contain filter drop-shadow-md transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg" />
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="group/logo">
                    <img src="/assets/images/about/lincon.jpg" alt="Lincoln" className="h-16 w-auto object-contain filter drop-shadow-md transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">JSG and Lincoln auto lube systems – Supply and repair - Fitted to most machines</span>
                </div>
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">JSG and Lincoln lubrication products – Supply and repair - Fitted to most machines</span>
                </div>
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">Lincoln grease injectors</span>
                </div>
              </div>
            </div>

            {/* Industrial Solutions */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#ff813a]/30 hover:-translate-y-2">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Industrial Solutions
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff813a] to-orange-600 rounded-full mx-auto shadow-sm"></div>
              </div>
              
              {/* Clean Industrial Solutions Logo */}
              <div className="relative mb-10 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100/50 shadow-inner">
                <div className="text-center">
                  <div className="group/logo inline-block">
                    <img src="/assets/images/about/industrialsolutions.png" alt="Industrial Solutions" className="h-16 w-auto object-contain filter drop-shadow-md transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">Industrial hose reels</span>
                </div>
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">Fixed plant lubrication systems and components</span>
                </div>
                <div className="group/item flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-orange-50 hover:to-orange-25 transition-all duration-300 border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-gradient-to-r from-[#ff813a] to-orange-600 shadow-sm" />
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">Instrumentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Partners Section */}
          <div className="mt-24">

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* Williams */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gray-800 rounded-xl px-4 group-hover:bg-gray-700 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/williamsIndustrial-logo.png" alt="Williams Tools" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Strong, trusted tools for industrial professionals</p>
              </div>

              {/* Penrite */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/penritelogo.png" alt="Penrite Oils" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">100% Australian owned, producing a premium range of vehicle and industrial lubricants, officially approved and registered by major OEM and industry bodies.</p>
              </div>

              {/* Continental */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/continentallogo.svg" alt="Continental" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Continental Tyres – The Future in Motion. German engineered tyres for Passenger cars, SUV, 4x4, Vans and Campers</p>
              </div>

              {/* BAR */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/barlogo.svg" alt="BAR Pressure Cleaners" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Industry specialist in the pressure washer and industrial high-pressure pumps</p>
              </div>

              {/* STAUFF */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/staufflogo.svg" alt="Stauff" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">The Premium manufacturer for hydraulics and fluid technology</p>
              </div>

              {/* Continental ContiTech */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/conitechaustraliaptdlogo.png" alt="ConiTech Australia Pty Ltd" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Connect, convey, and cover – with passion for our industries</p>
              </div>

              {/* Banlaw */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/banlawlogo.gif" alt="Banlaw – Fluid Asset Intelligence" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Creating the world's best fluid management solutions</p>
              </div>

              {/* LHA */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/LHAlogo.png" alt="Authorised Labour Hire Provider" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Authorised Labour Hire Provider</p>
              </div>

              {/* Capricorn */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img src="/assets/images/about/capricornlogo.png" alt="Capricorn Society Member" className="relative z-10 max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">Capricorn's network gives you access to everything you need to run and grow your business.</p>
              </div>

              {/* PowerTorq */}
              <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 hover:border-[#ff813a]/30 hover:-translate-y-2">
                <div className="relative overflow-hidden flex items-center justify-center h-20 mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 border border-gray-100/50 group-hover:from-orange-50 group-hover:to-orange-25 group-hover:border-orange-200/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <a href="https://powertorq.com.au/" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center justify-center w-full h-full">
                    <img src="/assets/images/about/powertorquelogo.png" alt="PowerTorq Partner" className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center">GMR is partnered with Powertorq, a professional retailer for specialised hydraulic tools, located in Central Queensland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 