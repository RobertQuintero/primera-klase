import { achievementsType } from "./talentsType.";

export type SuccessStories = {
    image: string,
    name: string,
    companyOrAffiliation: string,
    profession: string,
    successStory: string,
    date: string,
    achievements: Achievements[],
    };

export type Achievements = {
    title: string,
    date: string,
    description: string,
    };