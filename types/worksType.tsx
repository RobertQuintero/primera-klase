import { PortableTextBlock,Slug } from "sanity"
import { portfolioImagesType } from "./portfolioType"
import { servicesType } from "./servicesType"

export type WorksType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    title: string,
    description: string,
    date: string,
    services: servicesType[],
    portfolioImages: portfolioImagesType[],
    slug:Slug,
    body:PortableTextBlock[],
}


