export type Category = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  imageClass: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  price: string;
  imageClass: string;
  characteristics: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  imageClass: string;
};

export type Review = {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: number;
  text: string;
  imageClass: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type WorkStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
