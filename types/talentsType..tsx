import { portfolioImagesType } from "./portfolioType"
import { socialMediaType } from "./socialMediaType"

export type talents={
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender: string,
    nationality: string,
    height: string,
    weight: string,
    hairColor: string,
    eyeColor: string,
    bust: string,
    waist: string,
    hips: string,
    shoeSize: string,
    dressSize: string,
    tattoos: boolean,
    piercings: boolean,
    contactInfo: contactInfo,
    modelingPreferences: modelingPreferencesType[],
    socialMedia: socialMediaType[],
    portfolioFile: string,
    portfolioImages: portfolioImagesType[],
    achievements: achievementsType[],

}

export type contactInfo={
    email: string,
    mobile: string,
    telephone: string,
}

export type achievementsType={
    achievement: string,
    description: string,
    year: string,
}

export type modelingPreferencesType={
    modelingPreference: string,
}
