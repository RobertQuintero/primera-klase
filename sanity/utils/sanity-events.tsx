import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { EventType } from "@/types/eventType";


export async function getEventsData(): Promise<EventType[]> {
  const data = await client.fetch(groq`
    *[_type == "events"]| order(date asc) {...,
      _createdAt,
      _updatedAt,
      _id,
        "eventImage": eventImage.asset->url,
        eventTitle,
        eventDescription,
        date,
        time,
        location,
        eventLink,
        eventType,
        "specialGuest": specialGuest[]{
            name,
            title,
        },
     }
  `);
  return data;
}

