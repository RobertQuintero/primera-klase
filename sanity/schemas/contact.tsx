// contact schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "contact",
    title: "Contact Information",
    type: "document",
    fields: [
        defineField({
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: "address",
        title: "Address",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "mobile",
        title: "Phone",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "telephone",
        title: "Telephone",
        type: "string",
        }),

        defineField({
            name: "socialMedia",
            title: "Social Media",
            description: "Social Media Links",
            type: "array",
            of: [
                {
                type: "object",
                fields: [
                    {
                    name: "linkType",
                    title: "Link Type",
                    type: "string",
                    options: {
                        list: ["Website", "Facebook","LinkedIn","Instagram","Twitter","Pinterest","Tiktok","Youtube", "Other"], // You can define your options here
                    },
                    },
                    {
                    name: "url",
                    title: "URL",
                    type: "url",
                    },
                ],
                },
            ],
        }),

    ]
});