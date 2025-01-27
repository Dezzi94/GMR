import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common';
import AboutUsSection from '../components/AboutUsSection';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import ServiceLocationsSection from "../components/ServiceLocationsSection";
import CareersSection from '../components/CareersSection';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/backgrounds/about.webp)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About GMR1
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in mechanical solutions.
          </p>
        </div>
      </div>

      <AboutUsSection />
      
      <TimelineSection />
      
      <ServiceLocationsSection />
      
      <ProjectsSection />

      <CareersSection />
    </div>
  );
};

export default About; 