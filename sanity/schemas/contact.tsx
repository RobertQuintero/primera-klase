// contact schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "contact",
    title: "Contact Information",
    type: "document",
    fields: [

        defineField({
        name: "Address",
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
        validation: (Rule) => Rule.required(),
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
                        defineField({
                            name: "facebook",
                            title: "Facebook",
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