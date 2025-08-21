export interface Service {
  title: string;
  description: string;
}

export interface Machine {
  name: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  text: string;
  author: string;
  company: string;
}
