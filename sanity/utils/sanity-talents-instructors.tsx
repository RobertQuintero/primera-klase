import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { TalentsType } from "@/types/talentsType.";
import { instructorsType } from "@/types/instructorsType";

export async function getTalentsData(): Promise<TalentsType> {
  const data = await client.fetch(groq`
    *[_type == "talents"]{...,
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
        tattoos,
        piercings,
        "modelingPreferences": modelingPreferences[]{
            modelingPreference,
        },
        "socialMedia": socialMedia[]{
            "image": image.asset->url,
            socialMedia,
            url,
        },
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

export async function getInstructorsData(): Promise<instructorsType[]> {
  const data = await client.fetch(groq`
    *[_type == "instructors"]{...,
      _createdAt,
      _updatedAt,
      _id,
      fullName,
      dateOfBirth,
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