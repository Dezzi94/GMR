import React from 'react';
import ServicePage from '../../components/ServicePage';

const ComponentRebuild: React.FC = () => {
  const serviceData = {
    title: "Component Rebuild",
    description: [
      "At GMR, our Component Rebuild service is designed to give new life to your machinery's critical components, ensuring they function as reliably as the day they were first installed. Whether it's engines, hydraulic pumps, or other essential parts, our team meticulously disassembles, inspects, and rebuilds each component to meet or exceed OEM specifications.",
      "We combine skilled craftsmanship with advanced tools and rigorous quality control, so you can trust that your equipment will return to operation in top condition. This service helps you avoid costly replacements, reduces downtime, and enhances the longevity of your machinery—keeping your operations running smoothly and efficiently."
    ],
    benefits: [
      {
        title: "Maximise Equipment Lifespan",
        description: "Our rebuilds restore components to like-new condition, extending their operational life."
      },
      {
        title: "Minimise Downtime",
        description: "Reliable, efficient rebuilds reduce the risk of unexpected breakdowns."
      },
      {
        title: "High Quality Standards",
        description: "All work is completed to strict quality control standards, ensuring durability and performance."
      },
      {
        title: "Cost-Effective Solution",
        description: "Save on full replacements by opting for professional rebuilds that restore functionality and reliability."
      }
    ],
    backgroundImage: "/assets/images/services/componentrebuild.png",
    relatedServices: [
      { title: "Machine Assembly", path: "/services/machine-assembly" },
      { title: "Contract Project Management", path: "/services/contract-project-management" },
      { title: "Contract Supervision", path: "/services/contract-supervision" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ComponentRebuild; 