import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { aboutType } from "@/types/aboutType";
import { servicesType } from "@/types/servicesType";
import { faqsType } from "@/types/faqsType";
import { teamsType } from "@/types/teamsType";


// About page data
export async function getAboutData(): Promise<aboutType> {
  const data = await client.fetch(groq`*[_type=="about"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        company,
        companyPhrase,
        introduction,
        mission,
        history,
        "values": values[]{
            "image": image.asset->url,
            title,
            description,
        },
        "services": services[]->{
            "image": image.asset->url,
            title,
            description,
        },
        "testimonials": testimonials[]->{
            "image": image.asset->url,
            name,
            companyOrAffiliation,
            profession,
            testimonial,
            date,
        },
        "successStories": successStories[]->{
            "image": image.asset->url,
            name,
            companyOrAffiliation,
            profession,
            successStory,
            "achievements": achievements[]{
                title,
                date,
                description,
            },
            date,
        },
    }`);
  return data;
}

export async function getServicesData(): Promise<servicesType> {
  const data = await client.fetch(groq`*[_type=="services"]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
    }`);
  return data;
}

export async function getFaqsData(): Promise<faqsType[]> {
  const data = await client.fetch(groq`*[_type=="faqs"]{...,
        _createdAt,
        _updatedAt,
        _id,
        question,
        answer,
    }`);
  return data;
}

export async function getTeamsData(): Promise<teamsType[]> {
  const data = await client.fetch(groq`*[_type=="teams"]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        name,
        position,
        quote,
        "socialMedia": socialMedia[]{
            linkType,
            url,
        },
    }`);
  return data;
}

//