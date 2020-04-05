export interface CommercialExperience {
  name: string;
  url: string;
  role: string;
  description: string[];
  years: {
    since: number;
    till: number;
  };
  noLogo?: boolean;
}
