"use client";
// faqs component
import { faqsType } from "@/types/faqsType";
import React, { Fragment } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type faqsProps = {
  faqs: faqsType[];
};

const Faqs = ({ faqs }: faqsProps) => {
  return (
    <div className="max-w-7xl mx-auto py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
      <Accordion variant="shadow">
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
  );
};

export { Faqs };
