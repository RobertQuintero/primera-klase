// Team schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "team",
    title: "Team members",
    type: "document",
    fields: [

        defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "name",
        title: "Full name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "position",
        title: "Position",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "quote",
        title: "Quote",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "socialMedia",
        title: "Social media",
        type: "array",
        of: [
                {
                    type: "object",
                                       fields: [
                        defineField({
                            name: "facebook",
                            title: "Facebook",
                            type: "string",
                        }),
                        defineField({
                            name: "linkedin",
                            title: "Linkedin",
                            type: "string",
                        }),
                        defineField({
                            name: "instagram",
                            title: "Instagram",
                            type: "string",
                        }),
                        defineField({
                            name: "twitter",
                            title: "Twitter",
                            type: "string",
                        }),
                        defineField({
                            name: "tiktok",
                            title: "Tiktok",
                            type: "string",
                        }),
                        defineField({
                            name: "youtube",
                            title: "Youtube",
                            type: "string",
                        }),
                        defineField({
                            name: "website",
                            title: "Website",
                            type: "string",
                        }),
                    ],
                },
            ],
        }),
    ]
});