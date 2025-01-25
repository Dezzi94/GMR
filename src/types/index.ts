import React from 'react';

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  shortDescription: string;
  image: string;
  icon: JSX.Element;
  details: ServiceDetail[];
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ContactInfo {
  title: string;
  content: string;
  icon: JSX.Element;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
} 