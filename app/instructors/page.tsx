import { getInstructorsData } from "@/sanity/utils/sanity-talents-instructors";
import { InstructorsList } from "./components/instructorsList";
import React from "react";

export const revalidate = 1;

export default async function Instructors() {
  const Instructors = await getInstructorsData();
  return (
    <React.Fragment>
     <InstructorsList instructors={Instructors} />
    </React.Fragment>
  );
}
