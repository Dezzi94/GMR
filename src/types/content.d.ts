export interface HomeContent {
  hero: {
    title: string;
    description: string;
  };
  whoWeAre: {
    title: string;
    description: string;
  };
  statistics: Array<{
    value: string;
    label: string;
  }>;
  services: string[];
  projects: Array<{
    name: string;
    location: string;
    description: string;
    image: string;
  }>;
  careers: {
    title: string;
    description: string;
  };
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
  team: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    description: string;
  };
}

export interface Service {
  title: string;
  description: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
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

export interface ContactContent {
  hero: {
    title: string;
    description: string;
  };
  info: {
    phone: string;
    email: string;
    address: string;
  };
  form: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
} 