/**
 * Shared type definitions for the Qveka agency website.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  services: string[];
  image: string;
  logo: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}