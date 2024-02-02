"use client";
// faqs component
import { faqsType } from "@/types/faqsType";
import React, { Fragment } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { title } from "@/components/primitives";

type faqsProps = {
  faqs: faqsType[];
};

const Faqs = ({ faqs }: faqsProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        direction="down"
        className="flex flex-col items-center"
      >
        <h2
          className={`!font-bold text-warning  ${title(
            { size: "xxxl" }
          )}`}
        >
          Frequently Asked Questions
        </h2>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              aria-label={faq.question}
              title={faq.question}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export { Faqs };
