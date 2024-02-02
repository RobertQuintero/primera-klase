"use client";
// faqs component
import { faqsType } from "@/types/faqsType";
import React, { Fragment } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

type faqsProps = {
  faqs: faqsType[];
};

const Faqs = ({ faqs }: faqsProps) => {
  return (
    <React.Fragment>

      <div className="max-w-7xl mx-auto py-14 sm:mb-16 md:mb-24 lg:mb-28 ">
      <AnimatedDivLeftRightUpDown
        direction="down"
        className="flex flex-col gap-6 mb-4"
      >
        <h2
          className={`!font-bold text-warning  ${title(
            { size: "lg", color: "yellow2"}
          )}`}
        >
          Frequently Asked Questions
        </h2>
        <p className={`!text-default-700 max-w-2xl ${title({ size: "xxl" })}`}>
          Have a question? Look here
        </p>

        <p className={`!text-default-500 max-w-2xl ${paragraph({ size: "lg" })}`}>
          Here are some of the most frequently asked questions. If you have any
          other questions, feel free to contact us.
        </p>

      </AnimatedDivLeftRightUpDown>
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem
              indicator={<ChevronLeftIcon className="w-5 h-5 text-warning" />}
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
