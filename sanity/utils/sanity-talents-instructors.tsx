import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { TalentsType } from "@/types/talentsType.";
import { instructorsType } from "@/types/instructorsType";

export async function getTalentsData(): Promise<TalentsType[]> {
  const data = await client.fetch(groq`
      *[_type == "talents"]| order(_createdAt asc) {...,
      _createdAt,
      _updatedAt,
      _id,
        fullName,
        dateOfBirth,
        gender,
        nationality,
        height,
        weight,
        hairColor,
        eyeColor,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        tattoos,
        piercings,
        modelingPreferences,
        "slug": slug.current,
        "portfolioFile": portfolioFile.asset->url,

      "portfolioImages": portfolioImages[]{
        "image": image.asset->url,
        title,
      },

        "achievements": achievements[]{
            achievement,
            description,
            year,
        },
     }
  `);
  return data;
}
export async function getTalentsMaleData(): Promise<TalentsType[]> {
  const data = await client.fetch(groq`
      *[_type == "talents" && gender == "Male"]| order(_createdAt asc) {...,
      _createdAt,
      _updatedAt,
      _id,
        fullName,
        dateOfBirth,
        gender,
        nationality,
        height,
        weight,
        hairColor,
        eyeColor,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        tattoos,
        piercings,
        modelingPreferences,
        "slug": slug.current,
        "portfolioFile": portfolioFile.asset->url,

      "portfolioImages": portfolioImages[]{
        "image": image.asset->url,
        title,
      },

        "achievements": achievements[]{
            achievement,
            description,
            year,
        },
     }
  `);
  return data;
}
export async function getTalentsFemaleData(): Promise<TalentsType[]> {
  const data = await client.fetch(groq`
      *[_type == "talents" && gender == "Female"]| order(_createdAt asc) {...,
      _createdAt,
      _updatedAt,
      _id,
        fullName,
        dateOfBirth,
        gender,
        nationality,
        height,
        weight,
        hairColor,
        eyeColor,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        tattoos,
        piercings,
        modelingPreferences,
        "slug": slug.current,
        "portfolioFile": portfolioFile.asset->url,

      "portfolioImages": portfolioImages[]{
        "image": image.asset->url,
        title,
      },

        "achievements": achievements[]{
            achievement,
            description,
            year,
        },
     }
  `);
  return data;
}


export async function getTalentPage(slug: string): Promise<TalentsType> {
  const data = await client.fetch(
    groq`
    *[_type == "talents" && slug.current== $slug ][0]{...,
      _createdAt,
      _updatedAt,
      _id,
        fullName,
        dateOfBirth,
        gender,
        nationality,
        height,
        weight,
        hairColor,
        eyeColor,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        tattoos,
        piercings,
        modelingPreferences,
        "slug": slug.current,
        "portfolioFile": portfolioFile.asset->url,

      "portfolioImages": portfolioImages[]{
        "image": image.asset->url,
        title,
      },

        "achievements": achievements[]{
            achievement,
            description,
            year,
        },
      }`,
    { slug }
  );
  return data;
}

export async function getInstructorsData(): Promise<instructorsType[]> {
  const data = await client.fetch(groq`
    *[_type == "instructors"]{...,
      _createdAt,
      _updatedAt,
      _id,
      fullName,
      dateOfBirth,
      summary,
      gender,
      specialties,
      "portfolioImages": portfolioImages[]{
        "image": image.asset->url,
        title,
      },

      "experience": experience[]{
            company,
            position,
            startDate,
            endDate,
        },
        "education": education[]{
            school,
            degree,
            startDate,
            endDate,
        },
     }
  `);
  return data;
}
