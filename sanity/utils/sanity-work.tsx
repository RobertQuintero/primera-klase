import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { WorksType } from "@/types/worksType";


export async function getWorksData(): Promise<WorksType[]> {
  const data = await client.fetch(groq`
    *[_type == "works"]| order(_createdAt asc) {...,
      _createdAt,
      _updatedAt,
      _id,
        title,
        description,
        location,
        date,
        time,

        "slug":slug.current,

        "portfolioImages": portfolioImages[]{
          "image": image.asset->url,
          title,
        },

        "services": service[]->{
          title,
        },


     }
  `);
  return data;
}



export async function getWorkPage(slug: string): Promise<WorksType> {
  const data = await client.fetch(groq`
    *[_type == "works" && slug.current == "${slug}"][0] {...,
      _createdAt,
      _updatedAt,
      _id,
        title,
        description,
        location,
        date,
        time,
        "portfolioImages": portfolioImages[]{
          "image": image.asset->url,
          title,
        },
        "services": service[]->{
          title,
        },

        "slug":slug.current,
        body,

      }`,{slug}
  );
  return data;
}
