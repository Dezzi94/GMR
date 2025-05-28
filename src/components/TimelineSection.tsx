import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "Start",
    title: "Founding the Company",
    description: "Our journey began with a vision to revolutionize mechanical services in Queensland, focusing on mining, rural, and civil sectors.",
    image: "/assets/images/about/tracktor.jpg"
  },
  {
    year: "1998",
    title: "Major Project Win",
    description: "Secured our first major mining sector project, establishing our reputation for excellence in mechanical solutions.",
    image: "/assets/images/about/cardexchange.webp"
  },
  {
    year: "2005",
    title: "Signing Contract with Major Investor",
    description: "A significant milestone as we partnered with key industry investors, enabling rapid expansion of our services and capabilities.",
    image: "/assets/images/about/team2005.webp"
  },
  {
    year: "2009",
    title: "New Facility Launch",
    description: "Opened our state-of-the-art facility to enhance our service delivery and accommodate our growing team.",
    image: "/assets/images/about/office2009.webp"
  },
  {
    year: "2015",
    title: "Industry Leadership",
    description: "Recognised as an industry leader in mechanical services, known for innovation and exceptional project delivery.",
    image: "/assets/images/about/capacity.webp"
  },
  {
    year: "Now",
    title: "Continuing Excellence",
    description: "Leading the industry with cutting-edge solutions and a commitment to delivering outstanding results for our clients.",
    image: "/assets/images/about/bestinindustryNow.webp"
  }
];

const TRANSITION_INTERVAL = 5000; // 5 seconds between transitions

const TimelineSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<Milestone>(milestones[0]);
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getNextMilestone = (current: Milestone) => {
    const currentIndex = milestones.findIndex(m => m.year === current.year);
    const nextIndex = (currentIndex + 1) % milestones.length;
    return milestones[nextIndex];
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveMilestone(current => getNextMilestone(current));
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

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
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number]
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section 
      className="py-24 bg-[#1a1a1a] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
        {/* Title and Description */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Company History at a Glance
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our journey through the years, highlighting key milestones that shaped who we are today.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
            <div className="h-0.5 w-full" style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 50%, transparent 50%)',
              backgroundSize: '15px 1px'
            }} />
          </div>

          {/* Timeline Points */}
          <div className="relative flex justify-between items-center">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative group"
                onMouseEnter={() => {
                  setIsHoveredIndex(index);
                  setActiveMilestone(milestone);
                }}
                onMouseLeave={() => setIsHoveredIndex(null)}
              >
                <motion.button
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 relative z-10
                    ${activeMilestone.year === milestone.year 
                      ? 'bg-[#ff813a] border-[#ff813a]' 
                      : 'bg-[#1a1a1a] border-gray-500 hover:border-[#ff813a]'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveMilestone(milestone)}
                />
                
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHoveredIndex === index ? 1 : 0,
                      y: isHoveredIndex === index ? 0 : 10
                    }}
                    className="bg-[#2a2a2a] px-3 py-1 rounded-md shadow-lg text-sm whitespace-nowrap text-white"
                  >
                    {milestone.year}
                  </motion.div>
                </div>

                <motion.div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm font-medium
                    ${activeMilestone.year === milestone.year ? 'text-[#ff813a]' : 'text-gray-400'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {milestone.year}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] transform hover:scale-105 transition-transform duration-700">
                <img
                  src={activeMilestone.image}
                  alt={activeMilestone.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#ff813a]">
                {activeMilestone.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {activeMilestone.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TimelineSection; 