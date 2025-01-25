import { HomeContent, AboutContent, ServicesContent, ContactContent, Service, Statistic } from '../types/content';

export const HOME_CONTENT: HomeContent = {
  hero: {
    title: "Your Trusted Partner in Mechanical Solutions",
    subtitle: "Professional Mechanical Solutions",
    description: "We provide comprehensive mechanical services with a focus on quality, safety, and efficiency.",
    cta: "Get Started"
  },
  whoWeAre: {
    title: "We are the leader in Mechanical and Mining Services",
    description: "With over 26 years of experience, GMR1 has established itself as a trusted provider of mechanical services for the mining, rural, and civil sectors. Our team of 200 skilled professionals has completed over 180 projects, delivering high-quality service and dependability to more than 500 clients. From essential repairs and rebuilds to comprehensive project management, GMR1 is equipped to meet the unique demands of heavy industries with unmatched expertise and commitment."
  },
  services: [
    {
      title: "Contract Project Management",
      description: "Professional project management services for mechanical and mining operations",
      image: "/assets/images/services/contractprojectmanagement.png"
    },
    {
      title: "Contract Supervision",
      description: "Expert supervision services for your mechanical projects",
      image: "/assets/images/services/contractsupervision.png"
    },
    {
      title: "Mobilisation, Demobilisation and Relocation of Machinery",
      description: "Comprehensive machinery logistics and relocation services",
      image: "/assets/images/services/mobilisationrelocatemachinery.png"
    },
    {
      title: "Shutdown and Major Maintenance Work",
      description: "Specialized maintenance and shutdown services",
      image: "/assets/images/services/shutdownandmajormatainwork.png"
    },
    {
      title: "Long Term Labour Hire",
      description: "Skilled workforce solutions for extended projects",
      image: "/assets/images/services/longtermhire.png"
    },
    {
      title: "Short Term Labour Hire",
      description: "Flexible workforce solutions for short-term needs",
      image: "/assets/images/services/shorttermhire.png"
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
      description: "Ongoing maintenance program for manufacturing equipment.",
      image: "/assets/images/projects/project2.jpg"
    }
  ],
  careers: {
    title: "Join Our Growing Team",
    description: "We're always looking for talented professionals to join our team."
  },
  statistics: [
    { value: 180, label: "Projects" },
    { value: 150, label: "Clients" },
    { value: 200, label: "Team Members" },
    { value: 26, label: "Years Experience" }
  ]
};

export const ABOUT_CONTENT: AboutContent = {
  hero: {
    title: "About GMR1",
    description: "Your trusted partner in mechanical solutions."
  },
  history: {
    title: "Our Journey",
    description: "Founded over two decades ago, GMR1 started as a small workshop and has grown into a leading mechanical service provider. Our journey is marked by continuous growth, innovation, and a dedication to meeting the evolving needs of our clients."
  },
  values: {
    title: "Our Values",
    description: "The principles that guide everything we do.",
    values: [
      {
        title: "Quality",
        description: "We maintain the highest standards in all our work.",
        icon: "⭐"
      },
      {
        title: "Safety",
        description: "Safety is our top priority in every project.",
        icon: "🛡️"
      },
      {
        title: "Innovation",
        description: "We continuously improve and adapt to new technologies.",
        icon: "💡"
      }
    ]
  },
  team: {
    title: "Our Team",
    description: "Meet the experts behind our success.",
    members: [
      {
        name: "John Smith",
        role: "Technical Director",
        image: "/assets/images/team/john.jpg",
        bio: "Over 20 years of experience in mechanical engineering."
      },
      {
        name: "Sarah Johnson",
        role: "Operations Manager",
        image: "/assets/images/team/sarah.jpg",
        bio: "Specializes in project management and team coordination."
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
      image: "/assets/images/services/contractprojectmanagement.png"
    },
    {
      title: "Contract Supervision",
      description: "Expert supervision services for your mechanical projects",
      image: "/assets/images/services/contractsupervision.png"
    },
    {
      title: "Mobilisation, Demobilisation and Relocation of Machinery",
      description: "Comprehensive machinery logistics and relocation services",
      image: "/assets/images/services/mobilisationrelocatemachinery.png"
    },
    {
      title: "Shutdown and Major Maintenance Work",
      description: "Specialized maintenance and shutdown services",
      image: "/assets/images/services/shutdownandmajormatainwork.png"
    },
    {
      title: "Long Term Labour Hire",
      description: "Skilled workforce solutions for extended projects",
      image: "/assets/images/services/longtermhire.png"
    },
    {
      title: "Short Term Labour Hire",
      description: "Flexible workforce solutions for short-term needs",
      image: "/assets/images/services/shorttermhire.png"
    }
  ]
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
    email: "contact@gmr1.com",
    phone: "+61 7 1234 5678",
    address: "123 Business Street, Brisbane QLD 4000"
  }
}; 