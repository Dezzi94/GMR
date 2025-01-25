import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common';
import { ABOUT_CONTENT } from '../constants/content';

const About: React.FC = () => {
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
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-dark-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/backgrounds/about-hero.jpg)',
            filter: 'brightness(0.3)'
          }}
        />
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {ABOUT_CONTENT.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {ABOUT_CONTENT.hero.description}
          </p>
        </motion.div>
      </div>

      {/* History Section */}
      <Section className="py-24" background="white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-accent">
              {ABOUT_CONTENT.history.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {ABOUT_CONTENT.history.description}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="py-24" background="gray">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {ABOUT_CONTENT.values.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {ABOUT_CONTENT.values.description}
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {['Integrity', 'Quality', 'Customer Satisfaction'].map((value, index) => (
              <motion.div 
                key={value}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                variants={fadeInUpChild}
              >
                <div className="text-accent mb-4">
                  {/* Icon placeholder - replace with actual icons */}
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 21h22L12 2zm0 3.83L19.13 19H4.87L12 5.83zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark-gray">
                  {value}
                </h3>
                <p className="text-gray-600">
                  Our commitment to {value.toLowerCase()} sets us apart and ensures the best results for our clients.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-24" background="white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {ABOUT_CONTENT.team.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {ABOUT_CONTENT.team.description}
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {['Engineers', 'Technicians', 'Project Managers', 'Support Staff'].map((role, index) => (
              <motion.div 
                key={role}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                variants={fadeInUpChild}
              >
                <div className="text-accent mb-4">
                  {/* Icon placeholder - replace with actual icons */}
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-gray">
                  {role}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About; 