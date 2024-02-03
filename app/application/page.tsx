"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { ApplicationFormFemale } from "./components/applicationFormFemale";
import { ApplicationFormMale } from "./components/applicationFormMale";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <React.Fragment>
      <div className="flex flex-col mx-auto max-w-7xl w-full h-full">
        <h1 className={`!font-bold mb-6 ${title({size:"xl"})}`}>Become a Primera Klase</h1>

        <p className={`!text-default-500 mb-8  ${paragraph({size:"lg"})}`}>
          If you're keen on modeling, feel free to share your story and pictures
          using the hashtag provided.<br/> Primera doesn't conduct in-person 'open
          calls' at the office. Instead, please submit all talent applications
          via email to {siteConfig.becomePrimeKlase}.<br/> Keep in mind that applicants
          must be 18 years old or have written parental consent to be considered
        </p>
        <Tabs
          fullWidth
          size="lg"
          radius="none"
          aria-label="Tabs form"
          variant="bordered"
          color="warning"
          classNames={{tabContent: "font-bold text-lg"}}
        >
          <Tab key="Female" title="Female" >
            <ApplicationFormFemale />
          </Tab>
          <Tab key="Male" title="Male">
            <ApplicationFormMale />
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
}
