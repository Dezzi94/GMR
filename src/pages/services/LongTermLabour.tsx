import React from 'react';
import ServicePage from '../../components/ServicePage';

const LongTermLabour: React.FC = () => {
  const serviceData = {
    title: "Long Term Labour Hire",
    description: [
      "Finding dependable, skilled labour for long-term projects can be challenging, but GMR1 makes it easy with our Long Term Labour Hire service. We provide qualified, experienced professionals to support your operations for extended periods, ensuring that you have the workforce needed to keep your projects running smoothly.",
      "Our team of labour hire specialists carefully selects personnel based on your specific requirements, whether you're in mining, rural, or civil industries. With GMR, you get dedicated, skilled workers who integrate seamlessly with your team, contributing to your project's success over the long haul."
    ],
    benefits: [
      {
        title: "Qualified and Reliable Personnel",
        description: "All workers are vetted to ensure they meet your project's skill and safety standards."
      },
      {
        title: "Seamless Integration",
        description: "Our professionals adapt quickly, working alongside your team to maintain productivity."
      },
      {
        title: "Consistent Support",
        description: "With long-term placements, you avoid the disruptions of short-term hires and build a dependable workforce."
      },
      {
        title: "Flexible Solutions",
        description: "We provide labour hire services tailored to the duration and specific demands of your project."
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