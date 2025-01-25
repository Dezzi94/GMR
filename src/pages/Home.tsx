import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Section, Button } from '../components/common';
import { HOME_CONTENT } from '../constants/content';

interface StatValueProps {
  value: number;
  label: string;
}

const StatValue: React.FC<StatValueProps> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });
  const hasAnimated = useRef(false);
  const animationTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const startAnimation = () => {
      if (elementRef.current) {
        let startTimestamp: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * value);
          
          setCount(currentCount);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            // Schedule next animation after 10 seconds
            animationTimeout.current = setTimeout(() => {
              setCount(0);
              hasAnimated.current = false;
              startAnimation();
            }, 10000);
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      startAnimation();
    }

    return () => {
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, [isInView, value]);

  return (
    <div ref={elementRef} className="text-4xl font-bold text-[#ff813a]">
      {count}{value > 0 ? '+' : ''}
    </div>
  );
};

const Home: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

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

  const statCardAnimation = {
    initial: { opacity: 0, scale: 0.7 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    viewport: { once: true }
  };

  const animateValue = (start: number, end: number, label: string, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easeOutQuad for smoother counting
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      
      setCounts(prev => ({
        ...prev,
        [label]: currentCount
      }));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Hero Section Statistics
  const renderHeroStats = () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
      {HOME_CONTENT.statistics.map((stat) => (
        <div 
          key={stat.label}
          className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center"
        >
          <StatValue value={stat.value} label={stat.label} />
          <div className="text-white mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  // Who We Are Section Statistics
  const renderWhoWeAreStats = () => (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {HOME_CONTENT.statistics.map((stat) => (
        <motion.div 
          key={stat.label}
          className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
          variants={statCardAnimation}
        >
          <StatValue value={stat.value} label={`${stat.label}-section2`} />
          <span className="text-lg text-gray-600">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  // Statistics Section
  const renderStatistics = () => (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.3 }}
    >
      {HOME_CONTENT.statistics.map((stat) => (
        <motion.div 
          key={stat.label}
          className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
          variants={statCardAnimation}
        >
          <StatValue value={stat.value} label={stat.label} />
          <span className="text-lg text-gray-600">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-[85vh] relative flex items-center bg-dark-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/backgrounds/GMR1vanhero.jpg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="text-accent font-semibold text-lg mb-4 block">
              Professional Mechanical Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {HOME_CONTENT.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {HOME_CONTENT.hero.description}
            </p>
            <div className="flex gap-4">
              <Button 
                as={Link} 
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Get Started
              </Button>
              <Button 
                as={Link} 
                to="/services"
                className="bg-white hover:bg-gray-100 text-gray-900 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          {renderHeroStats()}
        </div>
      </div>

      {/* Who We Are Section */}
      <Section className="py-24" background="white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-lg mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {HOME_CONTENT.whoWeAre.title}
            </h2>
            <p className="text-xl text-gray-600">
              {HOME_CONTENT.whoWeAre.description}
            </p>
          </motion.div>
          {renderWhoWeAreStats()}
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-24" background="gray">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-accent font-semibold text-lg mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Mechanical Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We offer a wide range of professional services to meet your operational needs
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {HOME_CONTENT.services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <Button 
                  as={Link} 
                  to="/services" 
                  className="text-accent hover:text-accent-dark font-semibold transition-colors duration-300 inline-flex items-center gap-1 hover:-translate-x-0.5"
                >
                  Learn More <span className="transform transition-transform">→</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="py-24" background="white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-accent font-semibold text-lg mb-4 block">Featured Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our most impactful projects across various industries
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {HOME_CONTENT.projects.map((project, index) => (
              <motion.div 
                key={project.name}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24" background="accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {HOME_CONTENT.careers.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {HOME_CONTENT.careers.description}
            </p>
            <Button 
              as={Link} 
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Join Our Team
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home; 