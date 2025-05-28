import React from 'react';
import ServicePage from '../../components/ServicePage';

const ShortTermLabour: React.FC = () => {
  const serviceData = {
    title: "Short Term Labour Hire",
    description: [
      "When project timelines tighten or workloads spike, GMR's Short-Term Labour Hire service delivers the skilled mechanical support you need—fast. We provide qualified, job-ready personnel for short-duration assignments, helping you maintain productivity without compromising on safety or quality.",
      "Whether it's covering for absences, managing seasonal demand, or meeting critical deadlines, our flexible labour solutions ensure you have the right expertise on-site when it matters most."
    ],
    benefits: [
      {
        title: "Fast, Reliable Deployment",
        description: "We respond quickly to your needs, supplying skilled tradespeople to minimise delays and keep your project moving."
      },
      {
        title: "Flexible Hiring Options",
        description: "Get the support you need—only for as long as you need it—with no ongoing commitments."
      },
      {
        title: "Qualified, Safety-Focused Personnel",
        description: "Every worker is pre-vetted and equipped to contribute immediately within mechanical maintenance environments."
      },
      {
        title: "Cost-Effective Resourcing",
        description: "Manage peak workloads without the overhead of permanent staff, giving you agility and control over your workforce."
      }
    ],
    backgroundImage: "/assets/images/services/shorttermhire.png",
    logo: "/assets/images/about/labourhirelogo.png",
    relatedServices: [
      { title: "Long Term Labour Hire", path: "/services/long-term-labour" },
      { title: "Contract Supervision", path: "/services/contract-supervision" },
      { title: "Shutdown And Major Maintenance Work", path: "/services/shutdown" }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ShortTermLabour; 