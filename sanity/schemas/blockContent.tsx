//blockContent.tsx
import React from "react";
import { defineType, defineArrayMember } from "sanity";

const SpacerComponent = ({ children }: any) => (
  <div className="mx-auto text-center" >
          <p>-----spacer-----</p>{children}
  </div>
);
const QuoteWDecorator = ({ children }: any) => (
  <blockquote className="p-3   border-l-2  border-warning   bg-warning/5">
    <p className="dark:text-warning  font-semibold ">{children}</p>
  </blockquote>
);
const QuoteTDecorator = ({ children }: any) => (
  <blockquote className="p-3    border-l-2  border-success   bg-success/5 ">
    <p className="dark:text-success  font-semibold ">{children}</p>
  </blockquote>
);
const QuoteCDecorator = ({ children }: any) => (
  <blockquote className="p-3    border-l-2  border-primary   bg-primary/5 ">
    <p className="dark:text-primary  font-semibold ">{children}</p>
  </blockquote>
);

const hl1 = () => <span style={{ fontWeight: "bold" }}>HL1</span>;
const highlight1Decorator = ({ children }: any) => (
  <span className="bg-default  p-2 text-default-500  ">
    {children}
  </span>
);
const hl2 = () => <span style={{ fontWeight: "bold" }}>HL2</span>;
const highlight2Decorator = ({ children }: any) => (
  <span className="bg-primary/10  p-2 text-primary  ">
    {children}
  </span>
);
const hl3 = () => <span style={{ fontWeight: "bold" }}>HL3</span>;
const highlight3Decorator = ({ children }: any) => (
  <span className="bg-secondary/10  p-2 text-secondary  ">
    {children}
  </span>
);
const hl4 = () => <span style={{ fontWeight: "bold" }}>HL4</span>;
const highlight4Decorator = ({ children }: any) => (
  <span className="bg-success/10  p-2 text-success  ">
    {children}
  </span>
);
const hl5 = () => <span style={{ fontWeight: "bold" }}>HL5</span>;
const highlight5Decorator = ({ children }: any) => (
  <span className="bg-warning/10  p-2 text-warning  ">
    {children}
  </span>
);
const hl6 = () => <span style={{ fontWeight: "bold" }}>HL6</span>;
const highlight6Decorator = ({ children }: any) => (
  <span className="bg-danger/10  p-2 text-danger  ">{children}</span>
);

const SmallIcon = () => <span style={{ fontWeight: "bold" }}>S</span>;
export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",

      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        {
          title: "Success Quote",
          value: "blockquoteTip",
          component: QuoteTDecorator,
        },
        {
          title: "Warning Quote",
          value: "blockquoteWarning",
          component: QuoteWDecorator,
        },
        {
          title: "Conclusion Quote",
          value: "blockquoteConclusion",
          component: QuoteCDecorator,
        },
        { title: "Spacer", value: "spacer",
          component: SpacerComponent,
       },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],

      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight D",
            value: "highlightD",
            icon: hl1,
            component: highlight1Decorator,
          },
          {
            title: "Highlight P",
            value: "highlightP",
            icon: hl2,
            component: highlight2Decorator,
          },
          {
            title: "Highlight S",
            value: "highlightS",
            icon: hl3,
            component: highlight3Decorator,
          },
          {
            title: "Highlight Ss",
            value: "highlightSs",
            icon: hl4,
            component: highlight4Decorator,
          },
          {
            title: "Highlight W",
            value: "highlightW",
            icon: hl5,
            component: highlight5Decorator,
          },
          {
            title: "Highlight Dr",
            value: "highlightDr",
            icon: hl6,
            component: highlight6Decorator,
          },

          { title: "Small", value: "small", icon: SmallIcon },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Target",
                name: "target",
                type: "string",
                options: {
                  list: [
                    { title: "Current Window", value: "_self" },
                    { title: "New Window", value: "_blank" },
                  ],
                },
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
