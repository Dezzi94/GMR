import React from 'react';
import ServicePage from '../../components/ServicePage';

const ContractProjectManagement: React.FC = () => {
  const serviceData = {
    title: "Contract Project Management",
    description: [
      "At GMR, our Contract Project Management service is designed to provide seamless oversight for complex projects in the mining, rural, and civil sectors. Our experienced project managers handle every stage of your project, from initial planning through to completion, ensuring all aspects are coordinated and executed with precision.",
      "We focus on clear communication, effective resource allocation, and strict adherence to timelines and budgets. By understanding the unique requirements of each project, our team is equipped to anticipate challenges, adapt to changing conditions, and drive projects forward with minimal disruptions."
    ],
    benefits: [
      {
        title: "On-Time and On-Budget Delivery",
        description: "We prioritize efficiency and cost-effectiveness, ensuring your project meets its goals."
      },
      {
        title: "Experienced Leadership",
        description: "Our project managers bring industry-specific knowledge, making them well-suited to handle complex projects."
      },
      {
        title: "Proactive Problem Solving",
        description: "We identify and resolve issues before they impact timelines or quality."
      },
      {
        title: "Client-Focused Approach",
        description: "We maintain open communication with you at every stage, providing updates and addressing concerns promptly."
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