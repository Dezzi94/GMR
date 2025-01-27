import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  location: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: "Roll Hall of Fame and Museum",
    location: "Cleveland, United States",
    image: "/assets/images/projects/rollhalloffame.jpg",
    slug: "/projects/roll-hall"
  },
  {
    title: "Atlas Museum",
    location: "Tuletorget, Sweden",
    image: "/assets/images/projects/alasmuseum.jpg",
    slug: "/projects/atlas-museum"
  },
  {
    title: "The Zentrum Paul Klee",
    location: "Bern, Switzerland",
    image: "/assets/images/projects/thezentrumpaulklee.jpg",
    slug: "/projects/zentrum-paul"
  },
  {
    title: "Modern Apartment Building",
    location: "Berlin, Germany",
    image: "/assets/images/projects/modernapartmentbuildingjpg.jpg",
    slug: "/projects/modern-apartment"
  }
];

const ProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="py-24 bg-[#1a1a1a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}/>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            OUR PROJECTS
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Link 
              to="/projects"
              className="inline-flex items-center space-x-2 text-[#ff813a] hover:text-white transition-colors duration-300 group"
            >
              <span className="text-lg font-semibold">View All</span>
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl"
              whileHover="hover"
            >
              {/* Project Card */}
              <Link to={project.slug} className="block relative aspect-[4/3]">
                {/* Background Image */}
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"/>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100"
                  >
                    <span className="relative overflow-hidden px-6 py-3 border-2 border-[#ff813a] rounded-full group/button">
                      <span className="relative z-10 text-lg font-semibold transition-colors duration-300 group-hover/button:text-white">
                        View Project
                      </span>
                      <div className="absolute inset-0 bg-[#ff813a] transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 ease-out"/>
                    </span>
                  </motion.div>

                  <div className="transform group-hover:translate-y-0 translate-y-8 transition-transform duration-300">
                    <p className="text-[#ff813a] text-sm mb-2">{project.location}</p>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="h-1 w-12 bg-[#ff813a] transform origin-left group-hover:w-full transition-all duration-500"/>
                  </div>
                </div>
              </Link>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-4 border-[#ff813a]/20 rounded-lg transform rotate-45 group-hover:scale-150 transition-transform duration-500"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection; 