export interface Statistic {
  value: number;
  label: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface WhoWeAreContent {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  shortDescription: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Project {
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface ProjectsContent {
  title: string;
  description: string;
  projects: Project[];
}

export interface CareersContent {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: HeroContent;
  whoWeAre: WhoWeAreContent;
  services: Service[];
  projects: Project[];
  careers: CareersContent;
  statistics: Statistic[];
}

export interface AboutContent {
  hero: {
    title: string;
    description: string;
  };
  history: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  team: {
    title: string;
    description: string;
    members: Array<{
      name: string;
      role: string;
      image: string;
      bio: string;
    }>;
  };
}

export interface ServicesContent {
  hero: {
    title: string;
    description: string;
  };
  services: Service[];
}

export interface ContactContent {
  hero: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
  };
  info: {
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
} 