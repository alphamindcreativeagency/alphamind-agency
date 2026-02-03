
export enum Page {
  Home = 'HOME',
  About = 'Hakkımızda',
  Services = 'Hizmetler',
  Process = 'Süreç',
  Projects = 'Projeler',
  Clients = 'Müşteriler',
  Contact = 'İletişim',
  Manifesto = 'MANIFESTO'
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
