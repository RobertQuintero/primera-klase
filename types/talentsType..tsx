import { Slug } from "sanity"
import { portfolioImagesType } from "./portfolioType"
import { socialMediaType } from "./socialMediaType"

export type TalentsType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    fullName: string,
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
    pantsSize: string,
    tattoos: boolean,
    piercings: boolean,
    modelingPreferences: modelingPreferencesType[],
    socialMedia: socialMediaType[],
    portfolioFile: string,
    portfolioImages: portfolioImagesType[],
    achievements: achievementsType[],
    slug: Slug,
}

export type achievementsType={
    achievement: string,
    description: string,
    year: string,
}

export type modelingPreferencesType={
    modelingPreference: string,
}
