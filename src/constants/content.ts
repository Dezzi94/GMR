import { HomeContent, AboutContent, ServicesContent, ContactContent } from '../types/content';

export const HOME_CONTENT: HomeContent = {
  hero: {
    title: "Your Trusted Partner in Mechanical Solutions",
    subtitle: "Professional Mechanical Solutions",
    description: "We provide comprehensive mechanical services with a focus on quality, safety, and efficiency.",
    cta: "Get Started"
  },
  whoWeAre: {
    title: "We are the leader in Mechanical and Mining Services",
    description: "With 70 years combined experience in Australia, China and New Guinea, GMR has established itself as a trusted provider of mechanical services for the mining, rural, and civil sectors. Our team of 200 skilled professionals has completed over 180 projects, delivering high-quality service and dependability to more than 500 clients. From essential repairs and rebuilds to comprehensive project management, GMR is equipped to meet the unique demands of heavy industries with unmatched expertise and commitment."
  },
  services: [
    {
      title: "Contract Project Management",
      description: "Professional project management services for mechanical and mining operations",
      image: "/assets/images/services/contractprojectmanagement.png",
      path: "contract-project-management"
    },
    {
      title: "Contract Supervision",
      description: "Expert supervision services for your mechanical projects",
      image: "/assets/images/services/contractsupervision.png",
      path: "contract-supervision"
    },
    {
      title: "Mobilisation, Demobilisation and Relocation of Machinery",
      description: "Comprehensive machinery logistics and relocation services",
      image: "/assets/images/services/mobilisationrelocatemachinery.png",
      path: "mobilisation"
    },
    {
      title: "Shutdown and Major Maintenance Work",
      description: "Specialised maintenance and shutdown services",
      image: "/assets/images/services/shutdownandmajormatainwork.png",
      path: "shutdown"
    },
    {
      title: "Long Term Labour Hire",
      description: "Skilled workforce solutions for extended projects",
      image: "/assets/images/services/Labourhirephoto2.jpg",
      path: "long-term-labour"
    },
    {
      title: "Short Term Labour Hire",
      description: "Flexible workforce solutions for short-term needs",
      image: "/assets/images/services/shorttermhire.png",
      path: "short-term-labour"
    }
  ],
  projects: [
    {
      name: "Industrial HVAC Upgrade",
      location: "Brisbane, QLD",
      description: "Complete overhaul of industrial HVAC system for improved efficiency.",
      image: "/assets/images/projects/project1.jpg"
    },
    {
      name: "Manufacturing Plant Maintenance",
      location: "Gold Coast, QLD",
      description: "Ongoing maintenance programme for manufacturing equipment.",
      image: "/assets/images/projects/project2.jpg"
    }
  ],
  careers: {
    title: "Join Our Growing Team",
    description: "We're always looking for talented professionals to join our team."
  },
  statistics: [
    { value: 180, label: "Projects" },
    { value: 500, label: "Clients" },
    { value: 200, label: "Team Members" },
    { value: 70, label: "Years Combined Experience" }
  ]
};

export const ABOUT_CONTENT: AboutContent = {
  hero: {
    title: "About GMR",
    description: "Founded over two decades ago, GMR started as a small workshop and has grown into a leading mechanical service provider. Our journey is marked by continuous growth, innovation, and a dedication to meeting the evolving needs of our clients."
  },
  history: {
    title: "Our Journey",
    description: "Founded over two decades ago, GMR started as a small workshop and has grown into a leading mechanical service provider. Our journey is marked by continuous growth, innovation, and a dedication to meeting the evolving needs of our clients."
  },
  values: {
    title: "Our Values",
    description: "The principles that guide everything we do.",
    list: [
      {
        title: "Integrity",
        description: "We maintain the highest standards of honesty and ethical conduct in all our operations.",
        icon: "⭐"
      },
      {
        title: "Quality",
        description: "We are committed to delivering excellence in every service we provide.",
        icon: "🛡️"
      },
      {
        title: "Customer Satisfaction",
        description: "We prioritise our clients' needs and strive to exceed their expectations.",
        icon: "💡"
      }
    ]
  },
  team: {
    title: "Our Team",
    description: "Meet the experts behind our success.",
    list: [
      {
        name: "Engineers",
        role: "Technical Experts",
        image: "/assets/images/team/engineers.jpg",
        bio: "Our skilled engineers bring extensive experience in mechanical solutions."
      },
      {
        name: "Technicians",
        role: "Field Operations",
        image: "/assets/images/team/technicians.jpg",
        bio: "Experienced technicians ensuring quality service delivery."
      },
      {
        name: "Project Managers",
        role: "Project Leadership",
        image: "/assets/images/team/managers.jpg",
        bio: "Dedicated project managers coordinating successful project execution."
      },
      {
        name: "Support Staff",
        role: "Operations Support",
        image: "/assets/images/team/support.jpg",
        bio: "Essential team members ensuring smooth operations."
      }
    ]
  }
};

export const SERVICES_CONTENT: ServicesContent = {
  hero: {
    title: "Our Services",
    description: "Comprehensive solutions tailored to your business needs"
  },
  services: [
    {
      title: "Contract Project Management",
      description: "Professional project management services for mechanical and mining operations",
      image: "/assets/images/services/contractprojectmanagement.png",
      path: "contract-project-management",
      fullDescription: "Our contract project management service provides comprehensive oversight and coordination of mechanical and mining projects. We ensure efficient execution, timely delivery, and optimal resource utilisation while maintaining the highest standards of safety and quality.",
      features: [
        "End-to-end project planning and execution",
        "Resource allocation and optimisation",
        "Risk management and mitigation",
        "Quality control and compliance",
        "Progress monitoring and reporting"
      ]
    },
    {
      title: "Contract Supervision",
      description: "Expert supervision services for your mechanical projects",
      image: "/assets/images/services/contractsupervision.png",
      path: "contract-supervision",
      fullDescription: "Our experienced supervisors ensure your mechanical projects are executed according to specifications, safety standards, and industry best practices. We provide comprehensive oversight to maintain quality and efficiency throughout the project lifecycle.",
      features: [
        "On-site project supervision",
        "Safety protocol implementation",
        "Quality assurance",
        "Team coordination",
        "Performance monitoring"
      ]
    },
    {
      title: "Mobilisation, Demobilisation and Relocation of Machinery",
      description: "Comprehensive machinery logistics and relocation services",
      image: "/assets/images/services/mobilisationrelocatemachinery.png",
      path: "mobilisation",
      fullDescription: "We specialise in the safe and efficient movement of heavy machinery and equipment. Our team handles all aspects of mobilization, demobilization, and relocation, ensuring minimal downtime and maximum safety.",
      features: [
        "Equipment transportation planning",
        "Safe loading and unloading",
        "Site preparation",
        "Machinery setup and testing",
        "Compliance with transport regulations"
      ]
    },
    {
      title: "Shutdown and Major Maintenance Work",
      description: "Specialised maintenance and shutdown services",
      image: "/assets/images/services/shutdownandmajormatainwork.png",
      path: "shutdown",
      fullDescription: "Our shutdown and maintenance services are designed to minimise operational disruption while ensuring thorough maintenance and repairs. We work efficiently to get your operations back up and running with improved performance.",
      features: [
        "Planned shutdown management",
        "Emergency maintenance response",
        "Equipment overhaul",
        "System upgrades",
        "Performance optimisation",
        "Regular servicing"
      ]
    },
    {
      title: "Long Term Labour Hire",
      description: "Skilled workforce solutions for extended projects",
      image: "/assets/images/services/Labourhirephoto2.jpg",
      path: "long-term-labour",
      fullDescription: "Our long-term labour hire service provides skilled professionals for extended project needs. We ensure you have access to qualified personnel who understand your industry and can contribute effectively to your operations.",
      features: [
        "Skilled workforce provision",
        "Ongoing training and development",
        "Performance management",
        "Flexible staffing solutions",
        "Regular skill assessments"
      ]
    },
    {
      title: "Short Term Labour Hire",
      description: "Flexible workforce solutions for short-term needs",
      image: "/assets/images/services/shorttermhire.png",
      path: "short-term-labour",
      fullDescription: "Our short-term labour hire service offers flexible staffing solutions for temporary project needs or peak periods. We provide qualified professionals who can quickly integrate into your team and deliver results.",
      features: [
        "Rapid workforce deployment",
        "Qualified temporary staff",
        "Project-specific expertise",
        "Scalable workforce solutions",
        "Short-notice availability"
      ]
    },
    {
      title: "Mechanical Repairs and Maintenance",
      description: "GMR offers expert Mechanical Repairs and Maintenance services to ensure your machinery operates reliably and efficiently, reducing downtime and extending equipment life.",
      image: "/assets/images/services/mechanicalrepairsservice.png",
      path: "mechanical-repairs",
      fullDescription: "Our comprehensive mechanical repairs and maintenance services are designed to keep your equipment running at peak performance. We combine technical expertise with industry best practices to deliver reliable solutions.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Equipment diagnostics",
        "Performance optimisation",
        "Regular servicing"
      ]
    },
    {
      title: "Machine Assembly",
      description: "GMR provides expert Machine Assembly services to ensure your equipment is built for peak performance and reliability from the start.",
      image: "/assets/images/services/machineassembly.jpg",
      path: "machine-assembly",
      fullDescription: "Our machine assembly services ensure your equipment is properly assembled and configured for optimal performance. We follow strict quality control measures and manufacturer specifications.",
      features: [
        "Precision assembly",
        "Quality testing",
        "Performance verification",
        "Documentation and reporting",
        "Technical support"
      ]
    },
    {
      title: "Component Rebuild",
      description: "Extend the lifespan of your equipment with GMR's expert Component Rebuild services, designed to restore machinery to peak performance and reliability.",
      image: "/assets/images/services/componentrebuild.png",
      path: "component-rebuild",
      fullDescription: "Our component rebuild services help extend the life of your valuable equipment while ensuring optimal performance. We use quality parts and follow manufacturer specifications for all rebuilds.",
      features: [
        "Complete disassembly and inspection",
        "Parts replacement",
        "Performance testing",
        "Quality assurance",
        "Warranty coverage"
      ]
    }
  ],
  cta: {
    title: "Ready to Get Started?",
    description: "Contact us today to discuss your mechanical service needs and discover how we can help your business thrive."
  }
};

export const CONTACT_CONTENT: ContactContent = {
  hero: {
    title: "Contact Us",
    description: "Get in touch with our team"
  },
  form: {
    title: "Send us a Message",
    description: "We'll get back to you as soon as possible"
  },
  info: {
    title: "Contact Information",
    description: "Reach out to us through any of these channels",
    email: "contact@gmr.com",
    phone: "+61 455 365 528",
    address: "47 Macquarie Street, Gracemere, Queensland 4702"
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What areas do you service?",
        answer: "We provide services across Queensland, focusing on mining, rural, and civil sectors."
      },
      {
        question: "How quickly can you respond to service requests?",
        answer: "We offer 24/7 emergency response for urgent needs and can typically schedule regular service within 48 hours."
      },
      {
        question: "Do you provide quotes before starting work?",
        answer: "Yes, we provide detailed quotes for all projects to ensure transparency and help you plan your budget."
      }
    ]
  }
}; 