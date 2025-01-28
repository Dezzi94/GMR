import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get unique categories from projects
  const categories = ['all', ...new Set(PROJECTS.map(project => project.details.year))];

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.details.year === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/images/projects/rollhalloffameandmuseum.jpg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#ff813a] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#ff813a] rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Explore our portfolio of innovative mechanical solutions and successful projects
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Filter Section with Glass Effect */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#ff813a] text-white shadow-lg shadow-[#ff813a]/20'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-100'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-32 pb-40 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-white w-full flex flex-col"
              >
                <Link to={`/projects/${project.id}`} className="block flex-1 flex flex-col">
                  {/* Project Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col pt-10">
                    {/* Year and Location - Top Row */}
                    <div className="flex justify-between items-center mb-8 text-[15px]">
                      <span className="text-gray-900">{project.details.year}</span>
                      <span className="text-gray-900">{project.stats.find(stat => stat.label === 'Location')?.value}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.details.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-5 py-2 bg-gray-100 text-gray-600 text-[14px] hover:bg-gray-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#ff813a] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Client */}
                    <div className="mb-10">
                      <p className="text-[14px] text-gray-500 mb-2">Client</p>
                      <p className="text-[16px] text-gray-900">{project.details.client}</p>
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-[#ff813a] group-hover:text-[#ffa35d] transition-colors duration-300">
                      <span className="text-[15px] font-medium">View Project</span>
                      <svg
                        className="w-5 h-5 ml-4 transform transition-transform group-hover:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#ff813a] to-[#ffa35d] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-10 text-white/90 font-light max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our expertise in mechanical solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#ff813a] rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 