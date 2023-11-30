import { Testimonials } from "./testimonialsType"

// about page types
export type aboutType={
    image: string,
    company: string,
    companyPhrase: string,
    introduction: string,
    mission: string,
    history: string,
    values: Values[],
    services: Services[],
    testimonials: Testimonials[],
}
export type Values={
    image: string,
    title: string,
    description: string,
}
export type Services={
    image: string,
    title: string,
    description: string,
}