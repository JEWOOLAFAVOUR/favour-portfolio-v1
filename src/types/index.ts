import { LucideIcon } from "lucide-react";

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

// Experience Types
export interface Experience {
  duration: string;
  title: string;
  company: string;
  url: string | null;
  description: string;
  skills: string[];
}

// Project Types
export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  skills: string[];
  stars: number | null;
  featured: boolean;
}

// Archive Project Types
export interface ArchiveProject {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string | null;
  linkText: string;
}

// Mouse Position Type
export interface MousePosition {
  x: number;
  y: number;
}
