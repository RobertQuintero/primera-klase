// successStories schema
import { defineField, defineType } from "sanity";

export default defineType({
    name: "successStories",
    title: "Success Stories",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "company",
            title: "Company",
            type: "string",
            description: "Company name of the person giving the testimonial or Field (optional)",
        }),

        defineField({
            name: "profession",
            title: "Profession",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "successStory",
            title: "Success Story",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "achievements",
            title: "Achievements",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "date",
                            title: "Date",
                            type: "date",
                        },
                        {
                            name: "impact",
                            title: "Impact",
                            type: "text",
                        },
                    ],
                },
            ],
            description: "Additional achievements or milestones reached by the model",
        }),

        defineField({
            name: "date",
            title: "Date",
            type: "date",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
