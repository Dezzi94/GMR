import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Section } from '../components/common';
import { HOME_CONTENT } from '../constants/content';
import FeaturesSection from '../components/FeaturesSection';

interface StatValueProps {
  value: string | number;
  label: string;
}

const StatValue: React.FC<StatValueProps> = ({ value }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, {
    once: true,
    amount: 0.5
  });
  const hasAnimated = useRef<boolean>(false);
  const animationTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const startAnimation = () => {
      if (elementRef.current) {
        let startTimestamp: number | null = null;
        const duration = 2000;
        const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * numericValue);
          
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
      {count}{typeof value === 'number' && value > 0 ? '+' : ''}
    </div>
  );
};

const Home: React.FC = () => {
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/hero/GMR1vanhero.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[1200px] pt-20"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.1]">
                Welcome to Granger Mechanical Repairs (GMR)
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-20 max-w-[900px] leading-relaxed">
                Supporting mining, rural, and civil sectors across Queensland, GMR provides reliable and expert mechanical solutions tailored to your operational needs. With years of experience, our team is committed to quality, efficiency, and safety on every project.
              </p>
              <div className="flex justify-center pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-10 py-4 bg-[#ff813a] text-white text-xl font-medium rounded-md hover:bg-[#ff9a5f] transition-colors duration-300"
                >
                  Who We Are
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <Section className="py-24" background="white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We are the leader in{' '}
                <span className="text-[#ff813a] block">
                  Mechanical and Mining Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 70 years combined experience in Australia, China and New Guinea, GMR has established itself as a trusted provider of mechanical services for the mining, rural, and civil sectors. Our team of skilled professionals delivers high-quality service and dependability to clients throughout Central Queensland. From essential repairs and rebuilds to comprehensive project management, GMR is equipped to meet the unique demands of heavy industries with unmatched expertise and commitment.
              </p>
            </div>

            {/* Right Column - Experience Image */}
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/images/hero/70yearsofexperience.png"
                alt="70 Years Combined Experience"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pt-20 bg-white"
      >
        <span className="text-[#ff813a] font-semibold text-lg mb-4 block">Why Choose Us</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Experience the GMR Difference</h2>
      </motion.div>
      <FeaturesSection />
    </div>
  );
};

export default Home; 