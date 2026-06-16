export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  git_repo: string;
  live_demo: string;
};

export type ResumeEntry = {
  id: number;
  company: string;
  location?: string;
  role: string;
  roleDetails: string | null;
  startDate: string;
  summary?: string;
  description: string[];
};

export type EducationEntry = {
  id: number;
  institution: string;
  degreeLevel: string;
  course: string;
  graduated: string;
};

export type Theme = "light" | "dark";
