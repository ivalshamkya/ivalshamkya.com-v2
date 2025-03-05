import { ISkill } from "@/common/types/skill";

export interface Project {
  id: number;
  owner: string;
  image: string;
  title: string;
  content: string;
  url: string;
  isAuthored?: boolean;
  techStack: ISkill;
  height?: "tall" | "medium" | "short";
};