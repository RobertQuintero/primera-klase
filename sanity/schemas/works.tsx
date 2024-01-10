// work schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "works",
    title: "Work",
    type: "document",
    fields: [

        defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "title",
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "date",
        title: "Date",
        type: "date",
        validation: (Rule) => Rule.required(),
        }),

        // service catered should be an array of references to about services documents
        // title only
        defineField({
        name: "service",
        title: "Service",
        description: "Add services to the work page",
        type: "array",
        of: [{ type: "reference", to: [{ type: "services" }] }],
        validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "portfolioImages",
            title: "Image Gallery",
            description: "First image will be the cover image",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "body",
        title: "Body",
        type: "blockContent",
        }),

    ]
});