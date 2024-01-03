import { portfolioImagesType } from "./portfolioType"
import { servicesType } from "./servicesType"

export type WorksType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    title: string,
    description: string,
    location: string,
    date: string,
    time: string,
    services: servicesType[],
    specialGuest: specialGuestType[],
    portfolioImages: portfolioImagesType[],

}

export type specialGuestType={
    name: string,
    title: string,
}

