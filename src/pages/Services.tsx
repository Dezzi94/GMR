import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, PageTitle, Button } from '../components/common';
import { SERVICES_CONTENT } from '../constants/content';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  const fadeInUpChild = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="w-full">
      <PageTitle 
        title={SERVICES_CONTENT.hero.title}
        subtitle={SERVICES_CONTENT.hero.description}
        background="primary"
        className="text-reveal"
      />

      {/* Company Overview Section */}
      <Section className="py-20" background="dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[#ff813a]">Our Commitment to Excellence</h2>
            <p className="text-[#dcdcdc] text-lg leading-relaxed">
              GMR1 has been a cornerstone in providing mechanical solutions across Queensland, specializing in services that cater to the mining, rural, and civil sectors. Our commitment to excellence and safety has made us a trusted partner in the industry.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid with stagger and hover effects */}
      <Section className="py-20" background="white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES_CONTENT.services.map((service) => (
              <motion.div 
                key={service.title}
                variants={fadeInUpChild}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-[#ff813a] text-4xl mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#ff813a] text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.shortDescription}
                  </p>
                  <Button 
                    onClick={() => setSelectedService(SERVICES_CONTENT.services.indexOf(service))}
                    className="w-full bg-[#ff813a] hover:bg-[#ffa35d] text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

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
                  {SERVICES_CONTENT.services[selectedService].features.map((feature) => (
                    <motion.li 
                      key={`${SERVICES_CONTENT.services[selectedService].title}-${feature}`}
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
      <Section className="py-20 relative overflow-hidden" background="accent">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#ff813a] to-[#ff6b1e] opacity-90"
          style={{
            backgroundImage: 'url(/assets/images/backgrounds/pattern.png)',
            backgroundBlendMode: 'multiply'
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
              className="bg-white text-[#ff813a] hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
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