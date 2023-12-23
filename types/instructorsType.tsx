import { portfolioImagesType } from "./portfolioType"
import { socialMediaType } from "./socialMediaType"

export type instructorsType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    fullName: string,
    dateOfBirth: string,
    gender: string,
    experience: experienceType[],
    education: educationType[],
    specialties: string[],
    // skills: skillsType[],
    socialMedia: socialMediaType[],
    portfolioFile: string,
    portfolioImages: portfolioImagesType[],
}

export type experienceType={
    company: string,
    position: string,
    startDate: string,
    endDate: string,
}

export type educationType={
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
}


