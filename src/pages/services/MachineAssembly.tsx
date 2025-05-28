import React from 'react';
import ServicePage from '../../components/ServicePage';

const MachineAssembly: React.FC = () => {
  const serviceData = {
    title: "Machine Assembly",
    description: [
      "At GMR, our Machine Assembly service is dedicated to delivering precision and quality for your machinery from the ground up. Our team of skilled technicians assembles complex equipment with meticulous attention to detail, ensuring every component is installed to perform optimally under the toughest conditions.",
      "With years of experience in assembling machinery for the mining, rural, and civil sectors, we understand the importance of getting it right the first time. We handle everything from small parts to large-scale assemblies, using advanced tools and proven techniques to guarantee that your equipment is assembled to the highest standards."
    ],
    benefits: [
      {
        title: "Precision and Reliability",
        description: "Each machine is assembled with strict adherence to quality standards, ensuring peak performance."
      },
      {
        title: "Experienced Technicians",
        description: "Our team brings expertise and knowledge to every project, guaranteeing professional results."
      },
      {
        title: "Seamless Integration",
        description: "We ensure all components work together seamlessly, maximising efficiency and reliability."
      },
      {
        title: "Minimise Setup Time",
        description: "Get your machinery up and running faster with our efficient assembly process."
      }
    ],
    backgroundImage: "/assets/images/services/machineassembly.jpg",
    relatedServices: [
      { title: "Component Rebuild", path: "/services/component-rebuild" },
      { title: "Mechanical Repairs And Maintenance", path: "/services/mechanical-repairs" },
      { title: "Contract Supervision", path: "/services/contract-supervision" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MachineAssembly; 