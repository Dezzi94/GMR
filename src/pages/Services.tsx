import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Button } from '../components/common';
import { SERVICES_CONTENT } from '../constants/content';
import IndustrialMarketSection from '../components/IndustrialMarketSection';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/services.jpg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Services
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            {SERVICES_CONTENT.hero.description}
          </p>
        </div>
      </div>

      {/* Workshop Capabilities Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Workshop & Mobile Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              From our fully-equipped Gracemere workshop to comprehensive mobile services, we provide extensive fabrication, repair, and maintenance solutions across Central Queensland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* In-house Fabrication */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#ff813a] mr-3"></span>
                In-house Fabrication
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Light Fabrication</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Heavy Fabrication</span>
                </li>
              </ul>
            </div>

            {/* Offsite Services */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#ff813a] mr-3"></span>
                Offsite Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Rear dump body refurbs and repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Excavator bucket refurbs and repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Welding and line boring</span>
                </li>
              </ul>
            </div>

            {/* Machine Services */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#ff813a] mr-3"></span>
                Machine Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Machine overhaul</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Complete machine overhaul</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Extensive machine repairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Distributor Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Authorized Distributor
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We are proud to be an authorized distributor for industry-leading products and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* JSG and Lincoln Products */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#ff813a] mr-3"></span>
                JSG and SKF/Lincoln Products
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">JSG and Lincoln auto lube systems – Supply and repair - Fitted to most machines</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">JSG and Lincoln lubrication products – Supply and repair - Fitted to most machines</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Lincoln grease injectors</span>
                </li>
              </ul>
            </div>

            {/* Industrial Solutions */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#ff813a] mr-3"></span>
                Industrial Solutions
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Industrial hose reels</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Fixed plant lubrication systems and components</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-1.5 sm:w-2 h-1.5 sm:h-2 mt-2 rounded-full bg-[#ff813a]" />
                  <span className="text-sm sm:text-base text-gray-700">Instrumentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Section background="white" className="pt-8">
        <motion.div 
          className="container mx-auto px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CONTENT.services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 pb-2 relative">
                    {service.title}
                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ff813a]" />
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    as={Link}
                    to={`/services/${service.path}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <IndustrialMarketSection />

      {/* Service Details Modal */}
      {selectedService !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-[#ff813a]">
                  {SERVICES_CONTENT.services[selectedService].title}
                </h2>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-8">
                <img 
                  src={SERVICES_CONTENT.services[selectedService].image}
                  alt={SERVICES_CONTENT.services[selectedService].title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {SERVICES_CONTENT.services[selectedService].fullDescription}
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#ff813a]">Key Features</h3>
                <ul className="space-y-4">
                  {SERVICES_CONTENT.services[selectedService]?.features?.map((feature) => (
                    <motion.li 
                      key={`${SERVICES_CONTENT.services[selectedService]?.title}-${feature}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start space-x-4"
                    >
                      <svg className="w-6 h-6 text-[#ff813a] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button 
                  as="a"
                  href="/contact"
                  className="w-full bg-[#ff813a] hover:bg-[#ffa35d] text-white py-4 rounded-lg transition-all duration-300 hover:scale-105 text-center text-lg font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section with gradient background */}
      <Section className="py-20 relative overflow-hidden bg-[#ff813a]" background="accent">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/backgrounds/crane.webp)',
            opacity: 0.2
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{SERVICES_CONTENT.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">{SERVICES_CONTENT.cta.description}</p>
            <Button 
              as="a"
              href="/contact"
              className="!text-black bg-white hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Services; 