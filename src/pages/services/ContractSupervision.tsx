import React from 'react';
import ServicePage from '../../components/ServicePage';

const ContractSupervision: React.FC = () => {
  const serviceData = {
    title: "Contract Supervision",
    description: [
      "GMR's Contract Supervision service delivers the on-site leadership needed to keep your mechanical maintenance projects running smoothly and in line with industry best practices. Our experienced supervisors are embedded on-site to oversee all stages of work, ensuring safety standards, workmanship, and operational procedures are consistently upheld.",
      "With a strong emphasis on safety, efficiency, quality assurance, and strict compliance with project specifications, we help prevent unnecessary delays and reduce rework. Backed by extensive experience in the mining, rural, and civil sectors, our supervisors are skilled at identifying issues early and providing practical solutions to keep your maintenance operations on track."
    ],
    benefits: [
      {
        title: "Assured Quality Control",
        description: "We uphold strict quality standards, ensuring all mechanical work aligns with project requirements and industry regulations."
      },
      {
        title: "Commitment to Safety",
        description: "Safety is non-negotiable—our supervisors enforce compliance with all safety protocols to protect people, equipment, and operations."
      },
      {
        title: "Proactive On-Site Oversight",
        description: "Our real-time supervision enables early detection of issues, minimising downtime, rework, and schedule disruptions."
      },
      {
        title: "Practical, Industry-Backed Expertise",
        description: "With hands-on experience in mechanical maintenance, our supervisors provide trusted, informed guidance from start to finish."
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