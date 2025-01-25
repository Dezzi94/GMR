import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, PageTitle, Button } from '../components/common';
import { SERVICES_CONTENT } from '../constants/content';

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
      <Section background="dark">
        <motion.div 
          className="container mx-auto px-4 py-16 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#ff813a]">Our</span> Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {SERVICES_CONTENT.hero.description}
          </p>
        </motion.div>
      </Section>

      <Section background="white">
        <motion.div 
          className="container mx-auto px-4 py-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CONTENT.services.map((service, index) => (
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
                  <h3 className="text-xl font-semibold mb-2 relative">
                    {service.title}
                    <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#ff813a] transform -translate-y-2" />
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
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
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        </motion.div>
      </Section>

      <Section background="gray">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h4 className="text-4xl font-bold text-[#ff813a] mb-2">26+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-[#ff813a] mb-2">500+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-[#ff813a] mb-2">100+</h4>
              <p className="text-gray-600">Expert Team</p>
            </div>
            <div className="p-6">
              <h4 className="text-4xl font-bold text-[#ff813a] mb-2">50+</h4>
              <p className="text-gray-600">Active Clients</p>
            </div>
          </div>
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