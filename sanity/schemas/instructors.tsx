// Instructors schema

import { defineField, defineType } from "sanity";

export default defineType({
  name: "instructors",
  title: "Instructors",
  type: "document",
  fields: [
    // Personal Info
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Enter your full name (e.g. John Doe)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    // Professional Experience

    defineField({
      name: "experience",
      title: "Experience",
      description:
        "Previous teaching or coaching experience or Any relevant experience in the modeling industry",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "company",
              title: "Company",
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
              name: "startDate",
              title: "Start Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "endDate",
              title: "End Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Educational Background:

    defineField({
      name: "education",
      title: "Education",
      description:
        "Degrees or certifications related to teaching or modeling industry",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "school",
              title: "School",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "degree",
              title: "Degree",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "startDate",
              title: "Start Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "endDate",
              title: "End Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),

    // Specialties:

    defineField({
      name: "specialties",
      title: "Specialties",
      description:
        "Areas of expertise (e.g., runway modeling, posing techniques, portfolio development)",
      type: "array",
      of: [
        {
          type: "string",
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
                list: [
                  "Website",
                  "Facebook",
                  "LinkedIn",
                  "Instagram",
                  "Twitter",
                  "Pinterest",
                  "Tiktok",
                  "Youtube",
                  "Phone",
                  "Email",
                  "Other",
                ], // You can define your options here
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
      name: "portfolioImages",
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
  ],
});
