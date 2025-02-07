import React from 'react';
import ServicePage from '../../components/ServicePage';

const ShortTermLabour: React.FC = () => {
  const serviceData = {
    title: "Short Term Labour Hire",
    description: [
      "When you need extra hands to meet project deadlines or handle peak periods, GMR's Short Term Labour Hire service is here to help. We offer flexible labour hire solutions, providing experienced and qualified professionals who are ready to step in and support your operations, whether it's for a few days, weeks, or months.",
      "Our short-term labour solutions are ideal for filling temporary roles, handling unexpected workload spikes, or covering leave absences. With GMR, you can count on having the right people in place when you need them, ensuring your projects continue to run smoothly without delay."
    ],
    benefits: [
      {
        title: "Rapid Deployment",
        description: "We quickly provide skilled personnel, minimising downtime and keeping your project on track."
      },
      {
        title: "Flexible Workforce Solutions",
        description: "Hire for the exact duration you need, with no long-term commitments."
      },
      {
        title: "Qualified Professionals",
        description: "All workers are thoroughly vetted and equipped to integrate seamlessly into your team."
      },
      {
        title: "Cost-Effective Support",
        description: "Meet short-term demands without the cost of permanent hires, maintaining flexibility and control."
      }
    ],
    backgroundImage: "/assets/images/services/shorttermhire.png",
    relatedServices: [
      { title: "Long Term Labour Hire", path: "/services/long-term-labour" },
      { title: "Contract Supervision", path: "/services/contract-supervision" },
      { title: "Shutdown And Major Maintenance Work", path: "/services/shutdown" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ShortTermLabour; 