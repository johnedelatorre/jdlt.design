export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  tools: string[];
  tags: string[];
  headerImage: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  images: string[];
  figmaLink?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  contact: ContactInfo;
  skills: string[];
  experience: ExperienceItem[];
  interests: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
} 