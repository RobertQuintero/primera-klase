import { portfolioImagesType } from "./portfolioType"
import { socialMediaType } from "./socialMediaType"

export type instructorsType={
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender: string,
    experience: experienceType[],
    education: educationType[],
    Specialties: specialtiesType[],
    // skills: skillsType[],
    contactInfo: contactInfo,
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

export type specialtiesType={
    specialty: string,
}

export type contactInfo={
    email: string,
    mobile: string,
    telephone: string,
}

