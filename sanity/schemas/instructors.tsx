// Instructors schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "instructors",
    title: "Instructors",
    type: "document",
    fields: [
        // Personal Info
        defineField({
        name: "firstName",
        title: "First Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "lastName",
        title: "Last Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "dateOfBirth",
        title: "Date of Birth",
        type: "number",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "gender",
        title: "Gender",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        // Professional Experience

        defineField({
            name: "experience",
            title: "Experience",
            description: "Previous teaching or coaching experience or Any relevant experience in the modeling industry",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "company",
                            title: "Company",
                            type: "string",
                        }),
                        defineField({
                            name: "position",
                            title: "Position",
                            type: "string",
                        }),
                        defineField({
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                        }),
                        defineField({
                            name: "endDate",
                            title: "End Date",
                            type: "date",
                        }),
                    ],
                },
            ],
        }),

        // Educational Background:

        defineField({
            name: "education",
            title: "Education",
            description: "Degrees or certifications related to teaching or modeling industry",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "school",
                            title: "School",
                            type: "string",
                        }),
                        defineField({
                            name: "degree",
                            title: "Degree",
                            type: "string",
                        }),
                        defineField({
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                        }),
                        defineField({
                            name: "endDate",
                            title: "End Date",
                            type: "date",
                        }),
                    ],
                },
            ],
        }),

        // Specialties:

        defineField({
            name: "specialties",
            title: "Specialties",
            description: "Areas of expertise (e.g., runway modeling, posing techniques, portfolio development)",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "specialty",
                            title: "Specialty",
                            type: "string",
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        // Skills and Techniques:

        // defineField({
        //     name: "skills",
        //     title: "Skills and Techniques",
        //     description: "Skills and techniques you can teach (e.g., posing, runway walking, portfolio development)",
        //     type: "array",
        //     of: [
        //         {
        //             type: "object",
        //             fields: [
        //                 defineField({
        //                     name: "skill",
        //                     title: "Skill",
        //                     type: "string",
        //                 }),
        //             ],
        //         },
        //     ],
        //     validation: (Rule) => Rule.required(),
        // }),

        defineField({
            name: "contactInfo",
            title: "Contact Info",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "mobileNumber",
                            title: "Mobile Number",
                            type: "string",
                        }),
                        defineField({
                            name: "telephoneNumber",
                            title: "Mobile Number",
                            type: "string",
                        }),
                        defineField({
                            name: "email",
                            title: "Email",
                            type: "string",
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "socialMedia",
            title: "Social Media",
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
            validation: (Rule) => Rule.required(),
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
        name: "Portfolio",
        title: "Portfolio or work samples",
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