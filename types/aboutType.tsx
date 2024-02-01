import { SuccessStories } from "./successStoriesType"
import { Testimonials } from "./testimonialsType"

// about page types
export type aboutType={
    image: string,
    company: string,
    companyPhrase: string,
    introduction: string,
    mission: string,
    vision: string,
    history: string,
    values: Values[],
    testimonials: Testimonials[],
    successStories: SuccessStories,
}
export type Values={
    image: string,
    title: string,
    description: string,
}
