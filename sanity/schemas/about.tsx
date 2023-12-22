// about schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [

        defineField({
        name: "image",
        title: "Image background",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "company",
        title: "Company Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "companyPhrase",
        title: "Company Phrase",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),


        defineField({
        name: "introduction",
        title: "Introduction",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "mission",
        title: "Mission",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "vision",
        title: "Vision",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "history",
        title: "History",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        // defineField({
        //     name: "values",
        //     title: "Values",
        //     description: "Values of the company",
        //     type: "array",
        //     of: [{
        //             type: "object",
        //             fields: [
        //                 defineField({
        //                     name: "image",
        //                     title: "Image",
        //                     type: "image",
        //                     options: {
        //                         hotspot: true,
        //                     },
        //                 validation: (Rule) => Rule.required(),
        //                 }),
        //                 defineField({
        //                     name: "title",
        //                     title: "Title",
        //                     type: "string",
        //                 validation: (Rule) => Rule.required(),
        //                 }),
        //                 defineField({
        //                     name: "description",
        //                     title: "Description",
        //                     type: "text",
        //                 validation: (Rule) => Rule.required(),
        //                 }),
        //             ],
        //         },
        //     ],
        // }),

        defineField({
        name: "services",
        title: "Services",
        description: "Services of the company",
        type: "array",
        of: [{ type: "reference", to: [{ type: "services" }] }],
        validation: (Rule) => Rule.required(),
        }),

        // testimonials

        defineField({
        name: "testimonials",
        title: "Testimonials",
        description: "Testimonials of the company",
        type: "array",
        of: [{ type: "reference", to: [{ type: "testimonials" }] }],
        }),

        defineField({
        name: "successStories",
        title: "Success Stories",
        description: "Success Stories of the company",
        type: "array",
        of: [{ type: "reference", to: [{ type: "successStories" }] }],
        validation: (Rule) => Rule.required(),
        }),

    ]
});