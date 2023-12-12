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
  );
};

export { Faqs };
