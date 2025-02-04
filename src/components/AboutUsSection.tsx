import React from "react";
import { motion } from "framer-motion";

const AboutUsSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const features = [
    {
      title: "Cost-Efficient Solutions",
    },
    {
      title: "Experienced Team",
    },
    {
      title: "High-Impact Services",
    },
    {
      title: "Friendly, Reliable Service",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ff813a 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}/>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#ff813a]/10 to-transparent rounded-full blur-3xl"/>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#ff813a]/10 to-transparent rounded-full blur-3xl"/>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                We are leading international firm specialising in{" "}
                <span className="text-[#ff813a] relative">
                  Mechanical Services for Mining, Rural, and Civil Sectors
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-[#ff813a]/20 w-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 70 years combined experience in Australia, China and New Guinea, GMR1 is a trusted name in providing high-quality mechanical services tailored to the unique needs of the mining, rural, and civil industries. From cost-effective solutions to highly effective service, our team is dedicated to delivering exceptional results on every project.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-x-8 gap-y-10"
              variants={containerVariants}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#ff813a] group-hover:scale-125 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold group-hover:text-[#ff813a] transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 left-7 h-0.5 bg-[#ff813a]/20"
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={imageVariants}
            className="relative flex justify-center items-center h-full"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl">
              <div className="relative h-[500px] transform hover:scale-105 transition-transform duration-700 ease-out">
                <img
                  src="/assets/images/about/van.jpg"
                  alt="GMR1 Service Vehicle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#ff813a]/20 rounded-xl -z-10"/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection; 