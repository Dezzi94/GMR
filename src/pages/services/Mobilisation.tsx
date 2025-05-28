import React from 'react';
import ServicePage from '../../components/ServicePage';

const Mobilisation: React.FC = () => {
  const serviceData = {
    title: "Mobilisation, Demobilisation and Relocation of Machinery",
    description: [
      "Relocating heavy mechanical equipment demands skill, planning, and precision—all of which GMR delivers across every mobilisation, demobilisation, and relocation project. We specialise in the safe, efficient transport of machinery for the mining, rural, and civil sectors, ensuring your equipment arrives on-site ready for immediate deployment.",
      "Whether you're starting up a new site, wrapping up operations, or shifting machinery between locations, GMR handles the logistics from end to end. Our team oversees transportation, site readiness, and equipment setup, so you can stay focused on core maintenance activities—without the burden of coordinating complex moves."
    ],
    benefits: [
      {
        title: "Safe and Damage-Free Transport",
        description: "We adhere to strict handling and transport procedures to protect your valuable equipment every step of the way."
      },
      {
        title: "Fast Turnaround with Minimal Downtime",
        description: "Our team executes mobilisation and demobilisation efficiently to get you back to work faster."
      },
      {
        title: "End-to-End Coordination",
        description: "From route planning to site prep and final setup, we manage every detail for a smooth transition."
      },
      {
        title: "Proven Experience with Heavy Equipment",
        description: "Our professionals bring extensive hands-on experience in moving and installing mechanical plant and machinery."
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