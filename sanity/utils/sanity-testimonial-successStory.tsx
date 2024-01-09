
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Testimonials } from "@/types/testimonialsType";
import { SuccessStories } from "@/types/successStoriesType";

// About page data
export async function getTestimonialsData(): Promise<Testimonials[]> {
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

export async function getSuccessStoriesData(): Promise<SuccessStories[]> {
  const data = await client.fetch(groq`*[_type=="successStories"]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        name,
        companyOrAffiliation,
        successStory,
        profession,
        "achievements": achievements[]{ title, date , description },
        date,

    }`);
  return data;
}


