import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { contactType } from "@/types/contactType";


export async function getContacts(): Promise<contactType[]> {
    const data = await client.fetch(groq`*[_type=="contact"]{...,
        _createdAt,
        _updatedAt,
        _id,
        name,
        address,
        email,
        mobile,
        telephone,
        socialMedia,
    }`);
    return data;
}