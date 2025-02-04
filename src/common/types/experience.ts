import { ISkill } from "./skill";

export interface IExperience {
    id: number;
    company: {
        name: string;
        logo: string;
        website?: string;
    };
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    skills: ISkill;
}