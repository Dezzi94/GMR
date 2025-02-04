import React from 'react';
import ServicePage from '../../components/ServicePage';

const Shutdown: React.FC = () => {
  const serviceData = {
    title: "Shutdown and Major Maintenance Work",
    description: [
      "At GMR, we understand the critical nature of scheduled shutdowns and major maintenance projects. Our team specialises in providing comprehensive maintenance solutions that keep your equipment in peak condition, helping you avoid unplanned breakdowns and extending the life of your assets. We work with you to carefully plan and execute shutdowns, minimising operational downtime and ensuring all maintenance is completed efficiently and to the highest standards.",
      "Our experienced professionals handle every aspect of shutdowns and major maintenance, from initial planning and safety assessments to execution and post-maintenance inspections. With extensive experience in the mining, rural, and civil sectors, we ensure your machinery is ready to perform at its best when you're back up and running."
    ],
    benefits: [
      {
        title: "Minimise Downtime",
        description: "We work quickly and efficiently to complete maintenance tasks within your scheduled shutdown period."
      },
      {
        title: "Comprehensive Service",
        description: "Our team manages every aspect, from planning and safety to execution and final checks."
      },
      {
        title: "Enhanced Equipment Lifespan",
        description: "Regular major maintenance extends the operational life of your machinery and improves reliability."
      },
      {
        title: "Experienced Maintenance Team",
        description: "With a deep understanding of industry requirements, our team ensures your equipment is in expert hands."
      }
    ],
    backgroundImage: "/assets/images/services/shutdownandmajormatainwork.png",
    relatedServices: [
      { title: "Mechanical Repairs And Maintenance", path: "/services/mechanical-repairs" },
      { title: "Contract Project Management", path: "/services/contract-project-management" },
      { title: "Contract Supervision", path: "/services/contract-supervision" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default Shutdown; 