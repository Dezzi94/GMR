import React from 'react';
import ServicePage from '../../components/ServicePage';

const ContractSupervision: React.FC = () => {
  const serviceData = {
    title: "Contract Supervision",
    description: [
      "GMR's Contract Supervision service provides the professional oversight necessary to keep your projects on track and aligned with industry standards. Our experienced supervisors work on-site to monitor all phases of your project, ensuring that every aspect—from safety compliance to work quality—meets the strictest requirements.",
      "With a focus on efficiency, quality control, and adherence to project specifications, we provide the guidance needed to prevent costly delays and ensure smooth project progress. Our team has extensive experience across the mining, rural, and civil sectors, giving us the expertise to identify potential issues early and keep your project moving forward."
    ],
    benefits: [
      {
        title: "Quality Assurance",
        description: "We maintain high standards to ensure all work meets project specifications and regulatory requirements."
      },
      {
        title: "Safety Compliance",
        description: "Our supervisors prioritize safety, ensuring all activities adhere to safety protocols."
      },
      {
        title: "Efficient Oversight",
        description: "With real-time supervision, we catch issues early, reducing the risk of costly rework or delays."
      },
      {
        title: "Hands-On Expertise",
        description: "Our team brings industry knowledge and on-site experience, offering reliable guidance throughout the project."
      }
    ],
    backgroundImage: "/assets/images/services/contractsupervision.png",
    relatedServices: [
      { title: "Contract Project Management", path: "/services/contract-project-management" },
      { title: "Machine Assembly", path: "/services/machine-assembly" },
      { title: "Component Rebuild", path: "/services/component-rebuild" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ContractSupervision; 