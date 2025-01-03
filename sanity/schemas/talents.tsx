// talents or model schema

import { defineField, defineType } from "sanity";

type ModelingPreference = {
    modelingPreference: string;
};

export default defineType({
    name: "talents",
    title: "Talents",
    type: "document",
    fields: [
        // Personal Info
        defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        // full name with example
        description: "Enter your full name (e.g. John Doe)",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "fullName",
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "dateOfBirth",
        title: "Date of Birth",
        type: "date",
        validation: (Rule) => Rule.required(),
        }),

        // Gender should be a dropdown
        // Male and Female
        defineField({
        name: "gender",
        title: "Gender",
        type: "string",
        options: {
            list: [ "Female","Male"],
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "nationality",
        title: "Nationality",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),


        // Physical Info

        defineField({
        name: "height",
        title: "Height",
        type: "string",
        description: "Enter your height in centimeters (e.g. 180)",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "weight",
        title: "Weight",
        type: "string",
        description: "Enter your weight in kilograms (e.g. 60)",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "hairColor",
        title: "Hair Color",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "eyeColor",
        title: "Eye Color",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "bust",
        title: "Bust",
        type: "string",
        description: "Enter your bust size in centimeters (e.g. 90)",
        }),

        defineField({
        name: "waist",
        title: "Waist",
        type: "string",
        description: "Enter your waist size in centimeters (e.g. 60)",
        }),

        defineField({
        name: "hips",
        title: "Hips",
        type: "string",
        description: "Enter your hips size in centimeters (e.g. 90)",
        }),

        defineField({
        name: "shoeSize",
        title: "Shoe Size",
        type: "string",
        }),

        defineField({
        name: "dressSize",
        title: "Dress Size",
        type: "string",
        }),

        defineField({
        name: "pantsSize",
        title: "Dress Size",
        type: "string",
        }),


        defineField({
        name: "tattoos",
        title: "Tattoos",
        type: "boolean",
        }),

        defineField({
        name: "piercings",
        title: "Piercings",
        type: "boolean",
        }),


        defineField({
            name: "socialMedia",
            title: "Social Media",
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
                        list: ["Website", "Facebook","LinkedIn","Instagram","Twitter","Pinterest","Tiktok","Youtube","Phone","Email", "Other"], // You can define your options here
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

        // defineField({
        //     name: "languages",
        //     title: "Languages",
        //     type: "array",
        //     of: [
        //         {
        //             type: "object",
        //             fields: [
        //                 defineField({
        //                     name: "language",
        //                     title: "Language",
        //                     type: "string",
        //                 }),
        //                 defineField({
        //                     name: "level",
        //                     title: "Level",
        //                     type: "string",
        //                 }),
        //             ],
        //         },
        //     ],
        // }),

        // Modeling Preferences
        // Modeling Preferences should be a dropdown and multiple selection is allowed but no duplicates
        defineField({
        name: "modelingPreferences",
        title: "Modeling Preferences",
        description: "Select your modeling preferences ",
        type: "array",
        of: [
            {
                type: "object",
                fields: [
                    defineField({
                        name: "modelingPreference",
                        title: "Modeling Preference",
                        type: "string",
                        options: {
                            list: ["runway", "print", "commercial", "swimwear", "lingerie", "glamour", "art", "fitness", "parts", "fit", "hair", "promotional", "trade", "bodypart", "host", "spokesperson", "voiceover", "fitting", "other"],
                        },
                        // no duplicates
                          validation: Rule => Rule.custom((selectedPreferences) => {
                            if (Array.isArray(selectedPreferences)) {
                            const uniquePreferences = [...new Set(selectedPreferences)];
                            return uniquePreferences.length === selectedPreferences.length ? true : 'No duplicate Modeling preferences allowed';
                            }
                            return true; // pass validation if not an array (shouldn't happen in this case)
                        }),
                    }),
                ],
            },
        ],
        validation: (Rule) => Rule.required(),
        }),

        // Achievements

        defineField({
            name: "achievements",
            title: "Achievements",
            description: "List your achievements",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "achievement",
                            title: "Achievement",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "year",
                            title: "Year",
                            type: "date",
                            validation: (Rule) => Rule.required(),
                        }),

                    ],
                },
            ],
        }),


        // Portfolio images
        defineField({
            name: "portfolioImages",
            title: "Portfolio images",
            description: "Upload your portfolio images",
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

        // Portfolio file

        defineField({
        name: "portfolioFile",
        title: "Portfolio file",
        description: "Upload your portfolio file pdf or docx format (optional)",
        type: "file",
        }),
    ]
});