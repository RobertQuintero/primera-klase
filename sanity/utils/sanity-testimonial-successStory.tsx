
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Testimonials } from "@/types/testimonialsType";
import { SuccessStory } from "@/types/succesStoryType";

// About page data
export async function getTestimonialsData(): Promise<Testimonials> {
  const data = await client.fetch(groq`*[_type=="testimonials"]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        name,
        companyOrAffiliation,
        profession,
        testimonial,
        date,

    }`);
  return data;
}


export async function getSuccessStoryData(): Promise<SuccessStory> {
  const data = await client.fetch(groq`*[_type=="about"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
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

    }`);
  return data;
}