import React from 'react';
import ServicePage from '../../components/ServicePage';

const Mobilisation: React.FC = () => {
  const serviceData = {
    title: "Mobilisation, Demobilisation and Relocation of Machinery",
    description: [
      "Moving heavy machinery requires expertise, precision, and careful planning—qualities GMR brings to every mobilisation, demobilisation, and relocation project. Our team specialises in safely transporting machinery across sites in the mining, rural, and civil sectors, ensuring each piece of equipment is ready for immediate use upon arrival.",
      "Whether setting up a new project site, closing down operations, or relocating machinery to a different location, GMR's logistics experts handle all aspects of the process. We coordinate transportation, site preparation, and equipment setup, allowing you to focus on your core operations without worrying about logistics."
    ],
    benefits: [
      {
        title: "Safe and Secure Transport",
        description: "We follow strict safety protocols to ensure machinery is transported without risk of damage."
      },
      {
        title: "Efficient Setup and Teardown",
        description: "Our team handles mobilisation and demobilisation efficiently, minimising downtime."
      },
      {
        title: "Comprehensive Planning",
        description: "We take care of every detail, from route planning to site preparation, ensuring a seamless process."
      },
      {
        title: "Experienced Professionals",
        description: "Our team has years of experience handling complex machinery relocations, making sure each project runs smoothly."
      }
    ],
    backgroundImage: "/assets/images/services/mobilisationrelocatemachinery.png",
    relatedServices: [
      { title: "Contract Project Management", path: "/services/contract-project-management" },
      { title: "Contract Supervision", path: "/services/contract-supervision" },
      { title: "Machine Assembly", path: "/services/machine-assembly" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default Mobilisation; 