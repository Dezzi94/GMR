export interface JobPosition {
  id: string;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract';
  location: string;
  description: string;
  hours: string;
  benefits: string[];
  responsibilities: string[];
  qualifications: string[];
}

interface CareersData {
  hero: {
    title: string;
    description: string;
  };
  positions: JobPosition[];
}

export const CAREERS_DATA: CareersData = {
  hero: {
    title: "Join Our Team",
    description: "Be part of a dynamic team that's shaping the future of industrial solutions. We offer exciting opportunities for growth and innovation in a collaborative environment."
  },
  positions: [
    {
      id: "architect",
      title: "Architect",
      type: "Full Time",
      location: "Brisbane, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Join our architectural team to design innovative industrial solutions that meet client needs while maintaining the highest standards of quality and efficiency.",
      benefits: [
        "Competitive salary package",
        "Health and dental insurance",
        "Professional development opportunities",
        "Flexible working arrangements"
      ],
      responsibilities: [
        "Design and develop architectural plans for industrial projects",
        "Collaborate with engineering teams on technical specifications",
        "Ensure compliance with building codes and safety regulations",
        "Manage project timelines and deliverables"
      ],
      qualifications: [
        "Bachelor's degree in Architecture",
        "5+ years experience in industrial architecture",
        "Proficiency in CAD software",
        "Strong project management skills"
      ]
    },
    {
      id: "technology-specialist",
      title: "Technology Specialist",
      type: "Full Time",
      location: "Gold Coast, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Lead our technology initiatives and implement cutting-edge solutions to optimize industrial processes and enhance operational efficiency.",
      benefits: [
        "Competitive salary package",
        "Health and dental insurance",
        "Professional development budget",
        "Remote work options"
      ],
      responsibilities: [
        "Implement and maintain technology systems",
        "Provide technical support and training",
        "Optimize system performance",
        "Develop technology strategies"
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in industrial technology",
        "Strong problem-solving skills",
        "Experience with automation systems"
      ]
    },
    {
      id: "designer-3d-software",
      title: "Designer / 3D Software",
      type: "Full Time",
      location: "Brisbane, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Create detailed 3D models and designs for industrial projects using the latest software and technologies.",
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Training programs",
        "Modern work environment"
      ],
      responsibilities: [
        "Create 3D models and technical drawings",
        "Collaborate with engineering team",
        "Maintain design documentation",
        "Optimize design workflows"
      ],
      qualifications: [
        "Degree in Design or related field",
        "3+ years experience with 3D software",
        "Proficiency in industry-standard design tools",
        "Strong attention to detail"
      ]
    },
    {
      id: "finance-accounting",
      title: "Finance & Accounting",
      type: "Full Time",
      location: "Brisbane, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Join our finance team to manage financial operations and ensure compliance with accounting standards.",
      benefits: [
        "Competitive salary package",
        "Health and dental coverage",
        "Professional certifications support",
        "Work-life balance"
      ],
      responsibilities: [
        "Manage financial reporting and analysis",
        "Oversee accounts payable and receivable",
        "Ensure regulatory compliance",
        "Develop financial strategies"
      ],
      qualifications: [
        "Bachelor's degree in Finance or Accounting",
        "CPA certification preferred",
        "5+ years financial experience",
        "Strong analytical skills"
      ]
    },
    {
      id: "administrator",
      title: "Administrator",
      type: "Full Time",
      location: "Gold Coast, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Support our team with administrative tasks and ensure smooth office operations.",
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Professional development",
        "Team events"
      ],
      responsibilities: [
        "Manage office operations",
        "Coordinate team schedules",
        "Handle correspondence",
        "Maintain office supplies"
      ],
      qualifications: [
        "Administrative experience",
        "Proficiency in MS Office",
        "Strong organizational skills",
        "Excellent communication abilities"
      ]
    },
    {
      id: "logistics-support",
      title: "Logistics Support",
      type: "Full Time",
      location: "Brisbane, QLD",
      hours: "09:00 AM - 06:00 PM",
      description: "Coordinate logistics operations and ensure efficient delivery of materials and equipment.",
      benefits: [
        "Competitive pay",
        "Health insurance",
        "Career advancement",
        "Team environment"
      ],
      responsibilities: [
        "Coordinate shipments and deliveries",
        "Manage inventory systems",
        "Optimize logistics processes",
        "Maintain supplier relationships"
      ],
      qualifications: [
        "Logistics experience required",
        "Supply chain knowledge",
        "Strong problem-solving skills",
        "Attention to detail"
      ]
    }
  ]
}; 