import React from "react";
import { motion } from "framer-motion";

const FeaturesSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            {...fadeIn}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/images/hero/gmrhosevan.jpg"
              alt="GMR1 Service Vehicle"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div {...fadeIn} className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              At GMR, we&apos;re dedicated to providing advanced solutions to meet the complex needs of the mining, rural, and civil industries. From heavy-duty mechanical repairs to efficient hydraulic and hose services, we deliver excellence in every project.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Cost-Effective Solutions Card */}
          <motion.div
            variants={fadeIn}
            className="bg-[#2a2118] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-[#ff813a] text-2xl">✓</span>
              <h3 className="text-2xl font-bold text-[#ff813a] group-hover:text-white transition-colors duration-300">
                Cost-Effective Solutions
              </h3>
            </div>
            <p className="text-gray-300 ml-10">
              We prioritize affordable and efficient services, leveraging our expertise and resources to minimize downtime and reduce operational costs.
            </p>
          </motion.div>

          {/* High Performance Card */}
          <motion.div
            variants={fadeIn}
            className="bg-[#2a2118] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-[#ff813a] text-2xl">✓</span>
              <h3 className="text-2xl font-bold text-[#ff813a] group-hover:text-white transition-colors duration-300">
                High Performance and Reliability
              </h3>
            </div>
            <p className="text-gray-300 ml-10">
              Our services are built on quality and durability, ensuring that your equipment operates at peak performance. With GMR, you can count on reliable support for all your mechanical needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 