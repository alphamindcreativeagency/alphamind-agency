
export enum Page {
  Home = 'HOME',
  About = 'Hakkımızda',
  Services = 'Hizmetler',
  Process = 'Süreç',
  Contact = 'İletişim',
  Manifesto = 'MANİFESTO'
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
