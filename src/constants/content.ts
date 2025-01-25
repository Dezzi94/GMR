import { HomeContent, AboutContent, ServicesContent, ContactContent, Service } from '../types/content';

interface Statistic {
  value: number;
  label: string;
}

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

interface WhoWeAreContent {
  title: string;
  description: string;
}

interface ServicesContent {
  title: string;
  description: string;
  services: string[];
}

interface Project {
  name: string;
  location: string;
  description: string;
  image: string;
}

interface ProjectsContent {
  title: string;
  description: string;
  projects: Project[];
}

interface CareersContent {
  title: string;
  description: string;
}

interface HomeContent {
  hero: HeroContent;
  whoWeAre: WhoWeAreContent;
  services: string[];
  projects: Project[];
  careers: CareersContent;
  statistics: Statistic[];
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    title: "Your Trusted Partner in Mechanical Solutions",
    subtitle: "Professional Mechanical Solutions",
    description: "We provide comprehensive mechanical services with a focus on quality, safety, and efficiency.",
    cta: "Get Started"
  },
  whoWeAre: {
    title: "Excellence in Mechanical Services",
    description: "With decades of experience, we deliver innovative solutions tailored to your needs."
  },
  services: [
    {
      title: "Mechanical Installation",
      shortDescription: "Professional installation services",
      description: "Complete mechanical system installations",
      fullDescription: "Our expert team handles all aspects of mechanical installations, from planning to execution.",
      icon: "installation",
      image: "/assets/images/services/installation.jpg",
      features: ["Project Planning", "System Design", "Quality Installation", "Testing & Commissioning"]
    },
    {
      title: "Preventive Maintenance",
      shortDescription: "Regular maintenance services",
      description: "Scheduled maintenance programs",
      fullDescription: "Keep your systems running efficiently with our comprehensive maintenance programs.",
      icon: "maintenance",
      image: "/assets/images/services/maintenance.jpg",
      features: ["Regular Inspections", "Performance Optimization", "Preventive Repairs", "Documentation"]
    },
    {
      title: "Emergency Repairs",
      shortDescription: "24/7 emergency support",
      description: "Rapid response repair services",
      fullDescription: "Count on us for quick and reliable emergency repair services when you need them most.",
      icon: "repair",
      image: "/assets/images/services/repair.jpg",
      features: ["24/7 Availability", "Rapid Response", "Expert Diagnosis", "Quick Resolution"]
    }
  ],
  projects: [
    {
      name: "Industrial HVAC Upgrade",
      location: "Toronto, ON",
      description: "Complete overhaul of industrial HVAC system for improved efficiency.",
      image: "/assets/images/projects/project1.jpg"
    },
    {
      name: "Manufacturing Plant Maintenance",
      location: "Vancouver, BC",
      description: "Ongoing maintenance program for manufacturing equipment.",
      image: "/assets/images/projects/project2.jpg"
    }
  ],
  careers: {
    title: "Join Our Growing Team",
    description: "We're always looking for talented professionals to join our team."
  },
  statistics: [
    { value: 183, label: "Projects" },
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
    description: "Founded over two decades ago, we've grown into a leading provider of mechanical services."
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
      shortDescription: "Professional project management services",
      description: "We provide end-to-end project management services.",
      fullDescription: "We provide end-to-end project management services, ensuring every aspect of your project is handled professionally and efficiently.",
      icon: "🏗️",
      image: "/assets/images/services/project-management.jpg",
      features: [
        "Project planning and scheduling",
        "Resource allocation",
        "Risk management",
        "Quality control"
      ]
    },
    {
      title: "Contract Supervision",
      shortDescription: "Expert supervision for your teams",
      description: "Our expert supervisors ensure that your teams work effectively.",
      fullDescription: "Our expert supervisors ensure that your teams work effectively, maintaining safety and quality standards.",
      icon: "👷",
      image: "/assets/images/services/supervision.jpg",
      features: [
        "Team coordination",
        "Safety compliance",
        "Progress monitoring",
        "Performance optimization"
      ]
    },
    {
      title: "Machinery Logistics",
      shortDescription: "Efficient machinery logistics",
      description: "From equipment transport to setup, we streamline machinery logistics.",
      fullDescription: "From equipment transport to setup, we streamline machinery logistics for seamless operations.",
      icon: "🚛",
      image: "/assets/images/services/machinery.jpg",
      features: [
        "Equipment transport",
        "Site preparation",
        "Installation and setup",
        "Testing and commissioning"
      ]
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