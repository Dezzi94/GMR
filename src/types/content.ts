export interface Service {
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  features?: string[];
  shortDescription?: string;
  icon?: string;
}

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    cta: string;
    subtitle?: string;
  };
  whoWeAre: {
    title: string;
    description: string;
  };
  services: Service[];
  projects: Project[];
  careers: CareersContent;
  statistics: Array<{
    value: number;
    label: string;
  }>;
}

export interface Statistic {
  label: string;
  value: string;
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

export interface Project {
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface CareersContent {
  title: string;
  description: string;
}

export interface AboutHeroContent {
  title: string;
  description: string;
}

export interface AboutHistoryContent {
  title: string;
  description: string;
}

export interface AboutValue {
  title: string;
  description: string;
  icon: string;
}

export interface AboutValuesContent {
  title: string;
  description: string;
  values: AboutValue[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface AboutTeamContent {
  title: string;
  description: string;
  members: TeamMember[];
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
    list: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  team: {
    title: string;
    description: string;
    list: Array<{
      name: string;
      role: string;
      image: string;
      bio: string;
    }>;
  };
}

export interface ServicesHeroContent {
  title: string;
  description: string;
}

export interface ServicesContent {
  hero: {
    title: string;
    description: string;
  };
  services: Service[];
  cta: {
    title: string;
    description: string;
  };
}

export interface ContactHeroContent {
  title: string;
  description: string;
}

export interface ContactFormContent {
  title: string;
  description: string;
}

export interface ContactInfoContent {
  phone: string;
  email: string;
  address: string;
  title?: string;
  description?: string;
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
    phone: string;
    email: string;
    address: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
} 