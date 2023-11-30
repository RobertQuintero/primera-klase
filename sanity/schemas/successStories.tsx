// successStories schema
import { defineField, defineType } from "sanity";

export default defineType({
    name: "successStories",
    title: "Success Stories",
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
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "companyOrAffiliation",
            title: "Company",
            type: "string",
            description: "Company name of the person giving the testimonial or Field (optional)",
        }),

        defineField({
            name: "profession",
            title: "Profession",
            type: "string",
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
                            name: "description",
                            title: "Description",
                            type: "text",
                        },
                    ],
                },
            ],
            description: "Additional achievements or milestones reached by the model",
        }),

        defineField({
            name: "date",
            title: "Date of Success Story",
            type: "date",
            description: "Date when the success story was given",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
