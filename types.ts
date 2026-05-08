
export enum Page {
  Home = 'Home',
  About = 'Hakkımızda',
  Services = 'Hizmetler',
  Works = 'Works',
  Process = 'Süreç',
  Contact = 'İletişim',
  Manifesto = 'Manifesto',
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description?: string;
}
