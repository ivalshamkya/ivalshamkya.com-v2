export interface Project {
  id: number;
  type: "image" | "text";
  image: string;
  content: string;
  height?: "tall" | "medium" | "short";
};