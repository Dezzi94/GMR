import React from 'react';
import ServicePage from '../../components/ServicePage';

const MechanicalRepairs: React.FC = () => {
  const serviceData = {
    title: "Mechanical Repairs and Maintenance",
    description: [
      "At GMR, we understand the importance of reliable machinery for your operations. Our Mechanical Repairs and Maintenance services are designed to keep your equipment in top condition, minimizing unexpected breakdowns and maximizing operational efficiency. Whether it's routine maintenance or emergency repairs, our skilled technicians provide timely, high-quality service to get your machinery back in action as quickly as possible.",
      "With extensive experience in the mining, rural, and civil sectors, we're equipped to handle a wide range of mechanical needs, from minor adjustments to major repairs. We use advanced diagnostics and quality parts to ensure that every repair meets industry standards, helping you avoid costly disruptions and maintain a productive work environment."
    ],
    benefits: [
      {
        title: "Reduced Downtime",
        description: "Our efficient repair services keep your equipment running, minimizing operational delays."
      },
      {
        title: "Proactive Maintenance",
        description: "Regular maintenance prevents major issues, extends equipment lifespan, and saves on repair costs."
      },
      {
        title: "Skilled Technicians",
        description: "Our team brings deep expertise in handling complex mechanical issues across industries."
      },
      {
        title: "Quality and Reliability",
        description: "We use high-quality parts and proven techniques to ensure lasting repairs that you can depend on."
      }
    ],
    backgroundImage: "/assets/images/services/mechanicalrepairsservice.png",
    relatedServices: [
      { title: "Component Rebuild", path: "/services/component-rebuild" },
      { title: "Machine Assembly", path: "/services/machine-assembly" },
      { title: "Shutdown And Major Maintenance Work", path: "/services/shutdown" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MechanicalRepairs; 