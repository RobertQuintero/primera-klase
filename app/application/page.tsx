"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { ApplicationFormFemale } from "./components/applicationFormFemale";
import { ApplicationFormMale } from "./components/applicationFormMale";

export default function Contact() {
  return (
    <React.Fragment>
	<div className="flex flex-col mx-auto max-w-7xl w-full h-full">
      <Tabs
        fullWidth
        size="lg"
        radius="none"
        aria-label="Tabs form"
        variant="bordered"
      >
        <Tab key="Female" title="Female">
          <ApplicationFormMale />
        </Tab>
        <Tab key="Male" title="Male">
          <ApplicationFormMale />
        </Tab>
        <Tab key="trainee" title="Trainee">
          awd
        </Tab>
      </Tabs>
	</div>
    </React.Fragment>
  );
}
