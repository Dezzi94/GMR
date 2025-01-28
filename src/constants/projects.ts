export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectDetails {
  technologies: string[];
  challenges: string[];
  outcomes: string;
  year: string;
  client: string;
  initialConcept: string;
  finalDesign: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  stats: ProjectStat[];
  gallery: string[];
  details: ProjectDetails;
  additionalImages?: {
    concept?: string;
    design?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "roll-hall",
    title: "Roll Hall of Fame and Museum",
    tagline: "A historic project preserving cultural heritage",
    heroImage: "/assets/images/projects/rollhalloffameandmuseum.jpg",
    overview: "This iconic project represents a harmonious blend of architectural innovation and cultural preservation. Our team worked meticulously to modernize the museum's infrastructure while maintaining its historical significance.",
    stats: [
      { label: "Year", value: "2018" },
      { label: "Location", value: "Cleveland, United States" },
      { label: "Client", value: "William Manson" },
      { label: "Scope", value: "Complete Renovation" }
    ],
    gallery: [
      "/assets/images/projects/penandpaper.jpg",
      "/assets/images/projects/lightscelingview.jpg",
      "/assets/images/projects/roll-hall/gallery1.jpg",
      "/assets/images/projects/roll-hall/gallery2.jpg"
    ],
    details: {
      technologies: ["Advanced HVAC Systems", "Smart Building Integration", "Energy-Efficient Lighting"],
      challenges: [
        "Preserving historical architectural elements while modernizing facilities",
        "Implementing modern systems without disrupting the building's integrity",
        "Maintaining optimal conditions for artifact preservation"
      ],
      outcomes: "Successfully modernized the facility while preserving its historical essence, resulting in improved visitor experience and reduced energy consumption by 30%.",
      year: "2018",
      client: "William Manson",
      initialConcept: "Under the cube there are withdrawable soft modules, and inside the cube there is a live tree that is illuminated from the above roof window. This is a place for solitude, meditation and relaxation. Thus, with the help of withdrawable modules, you can create different zones for conversations, board games, and the one who needs to retire can go and have a rest under the tree.",
      finalDesign: "Under the cube there are withdrawable soft modules, and inside the cube there is a live tree that is illuminated from the above roof window. This is a place for solitude, meditation and relaxation. Thus, with the help of withdrawable modules, you can create different zones for conversations, board games, and the one who needs to retire can go and have a rest under the tree."
    },
    additionalImages: {
      concept: "/assets/images/projects/penandpaper.jpg",
      design: "/assets/images/projects/lightscelingview.jpg"
    }
  },
  {
    id: "atlas-museum",
    title: "Atlas Museum",
    tagline: "Where modern design meets cultural heritage",
    heroImage: "/assets/images/projects/alasmuseum.jpg",
    overview: "The Atlas Museum project showcases our ability to create contemporary spaces that honor cultural significance. This modern architectural marvel combines innovative design with practical functionality.",
    stats: [
      { label: "Year", value: "2020" },
      { label: "Location", value: "Tuletorget, Sweden" },
      { label: "Client", value: "Atlas Foundation" },
      { label: "Scope", value: "New Construction" }
    ],
    gallery: [
      "/assets/images/projects/atlas-museum/gallery1.jpg",
      "/assets/images/projects/atlas-museum/gallery2.jpg",
      "/assets/images/projects/atlas-museum/gallery3.jpg",
      "/assets/images/projects/atlas-museum/gallery4.jpg"
    ],
    details: {
      technologies: ["Sustainable Materials", "Solar Integration", "Smart Climate Control"],
      challenges: [
        "Integrating sustainable technologies in a historic district",
        "Meeting strict environmental regulations",
        "Balancing modern aesthetics with local architectural traditions"
      ],
      outcomes: "Created a landmark cultural institution that achieved LEED Platinum certification and serves as a model for sustainable museum design.",
      year: "2020",
      client: "Atlas Foundation",
      initialConcept: "The initial concept focused on creating a sustainable cultural space that would honor the local heritage while embracing modern architectural principles.",
      finalDesign: "The final design successfully integrates cutting-edge sustainable technologies with traditional architectural elements, creating a harmonious blend of old and new."
    }
  },
  {
    id: "zentrum-paul",
    title: "The Zentrum Paul Klee",
    tagline: "A masterpiece of modern architectural design",
    heroImage: "/assets/images/projects/thezentrumpaulklee.jpg",
    overview: "The Zentrum Paul Klee project exemplifies our commitment to creating spaces that inspire. This undulating structure harmoniously blends with its natural surroundings while providing state-of-the-art facilities.",
    stats: [
      { label: "Year", value: "2019" },
      { label: "Location", value: "Bern, Switzerland" },
      { label: "Client", value: "Klee Foundation" },
      { label: "Scope", value: "Custom Design & Build" }
    ],
    gallery: [
      "/assets/images/projects/zentrum-paul/gallery1.jpg",
      "/assets/images/projects/zentrum-paul/gallery2.jpg",
      "/assets/images/projects/zentrum-paul/gallery3.jpg",
      "/assets/images/projects/zentrum-paul/gallery4.jpg"
    ],
    details: {
      technologies: ["Advanced Structural Engineering", "Natural Light Integration", "Climate Control Systems"],
      challenges: [
        "Creating complex curved structures",
        "Optimizing natural light for art preservation",
        "Integrating building systems within unique architecture"
      ],
      outcomes: "Successfully created an architectural landmark that serves both as a museum and cultural center, attracting over 200,000 visitors annually.",
      year: "2019",
      client: "Klee Foundation",
      initialConcept: "The initial vision was to create a structure that would mirror the flowing lines found in Paul Klee's artwork, while providing an optimal environment for art preservation.",
      finalDesign: "The final structure achieves a perfect balance between form and function, with its wave-like design creating natural light patterns that enhance the visitor experience."
    }
  },
  {
    id: "modern-apartment",
    title: "Modern Apartment Building",
    tagline: "Urban living redefined through innovative design",
    heroImage: "/assets/images/projects/modernapartmentbuildingjpg.jpg",
    overview: "This contemporary residential project sets new standards for urban living. The design focuses on maximizing space efficiency while creating comfortable, sustainable living environments.",
    stats: [
      { label: "Year", value: "2021" },
      { label: "Location", value: "Berlin, Germany" },
      { label: "Client", value: "Urban Living GmbH" },
      { label: "Scope", value: "Residential Complex" }
    ],
    gallery: [
      "/assets/images/projects/modern-apartment/gallery1.jpg",
      "/assets/images/projects/modern-apartment/gallery2.jpg",
      "/assets/images/projects/modern-apartment/gallery3.jpg",
      "/assets/images/projects/modern-apartment/gallery4.jpg"
    ],
    details: {
      technologies: ["Smart Home Integration", "Energy-Efficient Systems", "Sustainable Materials"],
      challenges: [
        "Maximizing space efficiency in urban setting",
        "Implementing sustainable features within budget",
        "Meeting diverse resident needs"
      ],
      outcomes: "Created a modern living space that achieved 95% occupancy within three months and received multiple awards for sustainable urban development.",
      year: "2021",
      client: "Urban Living GmbH",
      initialConcept: "The initial concept focused on creating a sustainable urban living space that would maximize efficiency without compromising on comfort and style.",
      finalDesign: "The final design incorporates smart home technology and sustainable features throughout, setting new standards for modern urban living."
    }
  }
]; 