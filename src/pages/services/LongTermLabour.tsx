import React from 'react';
import ServicePage from '../../components/ServicePage';

const LongTermLabour: React.FC = () => {
  const serviceData = {
    title: "Long Term Labour Hire",
    description: [
      "Sourcing reliable, skilled labour for ongoing mechanical maintenance projects can be challenging—GMR makes it simple. Our Long-Term Labour Hire service supplies qualified professionals with the experience and technical capability needed to keep your operations running efficiently over the long term.",
      "We match our workforce to your specific needs, ensuring each technician or tradesperson integrates seamlessly into your team and work environment. Whether you're operating in mining, rural, or civil sectors, our personnel bring the mechanical expertise and work ethic to support your success from start to finish."
    ],
    benefits: [
      {
        title: "Skilled, Pre-Vetted Tradespeople",
        description: "All personnel are thoroughly screened to meet your safety, compliance, and technical requirements."
      },
      {
        title: "Smooth Workforce Integration",
        description: "Our workers adapt quickly to your systems and culture, ensuring continued momentum on-site."
      },
      {
        title: "Reliable, Ongoing Support",
        description: "Long-term placements reduce turnover and disruption, giving you a stable and dependable team."
      },
      {
        title: "Flexible Labour Solutions",
        description: "We tailor our labour hire services to suit the duration, scale, and mechanical demands of your project."
      }
    ],
    backgroundImage: "/assets/images/services/Labourhirephoto2.jpg",
    logo: "/assets/images/about/labourhirelogo.png",
    relatedServices: [
      { title: "Short Term Labour Hire", path: "/services/short-term-labour" },
      { title: "Contract Supervision", path: "/services/contract-supervision" },
      { title: "Contract Project Management", path: "/services/contract-project-management" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default LongTermLabour; 