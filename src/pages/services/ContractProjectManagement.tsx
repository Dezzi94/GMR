import React from 'react';
import ServicePage from '../../components/ServicePage';

const ContractProjectManagement: React.FC = () => {
  const serviceData = {
    title: "Contract Project Management",
    description: [
      "At GMR, our Contract Project Management service is tailored to deliver exprt oversight for complex mechanical maintenance projects across the mining, rural, and civil sectors. Our skilled project managers oversee every phase—from planning and scheduling through to execution and close-out—ensuring seamless coordination and technical precision at every step.",
      "We prioritise clear communication, efficient use of resources, and strict compliance with timeframes and budgets. With a strong understanding of the operational demands in maintenance environments, our team is prepared to identify risks early, respond to evolving site conditions, and keep your project moving with minimal downtime."
    ],
    benefits: [
      {
        title: "Reliable Delivery – On Time and Within Budget",
        description: "We focus on operational efficiency and cost control to ensure your maintenance projects are completed without overruns or delays."
      },
      {
        title: "Industry-Specific Expertise",
        description: "Our project managers have hands-on experience in mechanical maintenance and understand the technical and safety demands of your industry."
      },
      {
        title: "Proactive Risk Management",
        description: "We address potential issues early, minimising downtime and ensuring work quality is never compromised."
      },
      {
        title: "Transparent, Client-Centric Communication",
        description: "We keep you informed at every stage, providing regular updates and responding promptly to your needs and feedback."
      }
    ],
    backgroundImage: "/assets/images/services/contractprojectmanagement.png",
    relatedServices: [
      { title: "Contract Supervision", path: "/services/contract-supervision" },
      { title: "Machine Assembly", path: "/services/machine-assembly" },
      { title: "Mechanical Repairs And Maintenance", path: "/services/mechanical-repairs" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ContractProjectManagement; 