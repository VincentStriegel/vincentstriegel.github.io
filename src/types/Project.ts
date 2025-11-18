export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned"
  | "On Hold"
  | "Archived";

export interface Project {
  title: string;
  code: string;
  year: number;
  shortDescription: string;
  coverImage: string;
  projectImage?: string;
  usedTech: string[];
  githubRepo?: string;
  status: ProjectStatus;
}
