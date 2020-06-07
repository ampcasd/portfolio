export type CommercialExperience =
  CommercialExperienceWithLogo | CommercialExperienceWithoutLogo;

export interface CommercialExperienceBase {
  name: string;
  url: string;
  role: string;
  description: string[];
  years: {
    since: number;
    till: number;
  };
}

type CommercialExperienceWithLogo = CommercialExperienceBase & {
  logoFilename: string;
};

type CommercialExperienceWithoutLogo = CommercialExperienceBase & {
  noLogo: boolean;
};
