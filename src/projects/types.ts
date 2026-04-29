export type ProjectServiceBrief = {
  title: string;
  description: string;
};

export type ProjectDetail = {
  overview: string;
  architecture: string;
  howItWorks: string[];
  services: ProjectServiceBrief[];
};

export type Project = {
  id: string;
  name: string;
  whatItIs: string;
  whatItDoes: string[];
  summary: string;
  href: string;
  language?: string;
  detail?: ProjectDetail;
  liveFxRates?: boolean;
};
