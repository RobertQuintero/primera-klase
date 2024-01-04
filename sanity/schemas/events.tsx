// schedule schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "events",
    title: "Events",
    type: "document",
    fields: [

        defineField({
        name: "eventImage",
        title: "Event Image",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "eventTitle",
        title: "Event Title",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "eventDescription",
        title: "Event Description",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "date",
        title: "Event Date",
        type: "date",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "time",
        title: "Event Time",
        type: "string",
        }),

        defineField({
        name: "location",
        title: "Event Location",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "eventLink",
        title: "Event Link",
        type: "string",
        }),

        defineField({
        name: "eventType",
        title: "Event Type",
        type: "string",
        options: {
            list: [
                { title: "Fashion shows", value: "fashionShow" },
                { title: "Runway events", value: "runwayEvents" },
                { title: "Photo shoots", value: "photoShoots" },
                { title: "Casting call", value: "castingCalls" },
                { title: "Audition", value: "auditions" },
                { title: "Modeling classes", value: "modelingClass" },
                { title: "Competition", value: "competitions" },
                { title: "Conventions", value: "convention" },
                { title: "Workshops", value: "workshop" },
                { title: "Seminar", value: "seminar" },
                { title: "Conference", value: "conference" },
                { title: "Other", value: "other" },
            ],
        },
        }),

        defineField({
        name:"specialGuest",
        title:"Special Guest",
        description:"",
        type:"array",
        of: [
                {
                type: "object",
                fields: [
                    {
                    name: "name",
                    title: "Full name of the Guest",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                    },
                    {
                    name: "title",
                    title: "Title of Guest",
                    type: "string",
                    },

                ],
                },
            ],
        }),


    ]
});