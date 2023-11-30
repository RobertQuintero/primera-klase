// faqs schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "faqs",
    title: "Frequently Asked Questions",
    type: "document",
    fields: [

        defineField({
        name: "question",
        title: "Question",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "answer",
        title: "Answer",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

    ]
});