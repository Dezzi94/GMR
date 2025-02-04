import React from "react";
import { motion } from "framer-motion";
import { Button } from "./common";

const IndustrialMarketSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  };

  const staggerFeatures = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  };

  const featureItem = {
    initial: { opacity: 0, x: -30, scale: 0.9 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #f0f0f0 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            className="max-w-xl"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-[#ff813a] to-transparent"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pl-4"
                variants={fadeInUp}
              >
                We are a leader in the 
                <span className="relative inline-block">
                  <span className="relative z-10 whitespace-nowrap"> Industrial Market</span>
                  <motion.span 
                    className="absolute bottom-2 left-0 h-3 bg-[#ff813a]/10 w-full -skew-x-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  />
                </span>
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              consectetur lorem donec massa sapien.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-8 mb-12"
              variants={staggerFeatures}
            >
              {[
                "Minimal costs",
                "Nice people",
                "Highly effective",
                "26 years experience"
              ].map((feature) => (
                <motion.div 
                  key={feature}
                  className="flex items-center space-x-4 group"
                  variants={featureItem}
                >
                  <span className="w-3 h-3 rounded-full bg-[#ff813a] group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"/>
                  <span className="text-gray-700 font-medium group-hover:text-[#ff813a] group-hover:translate-x-1 transition-all duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="relative inline-block"
            >
              <Button
                as="a"
                href="/projects"
                variant="primary"
                size="large"
                className="relative z-10 group overflow-hidden"
              >
                <span className="relative z-10 inline-block group-hover:translate-x-1 transition-transform duration-300">
                  View Projects
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#ff813a] to-[#ff9f5a]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff813a] to-[#ff9f5a] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"/>
            </motion.div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#ff813a]">70</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative h-[600px] transform hover:scale-105 transition-transform duration-700 ease-out">
              <img
                src="/assets/images/services/servicesimage.webp"
                alt="Industrial Environment"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/20 rounded-full"/>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/20 rounded-full"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialMarketSection; 