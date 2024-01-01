"use client";
import React from "react";
import { instructorsType } from "@/types/instructorsType";
import { InstructorCard } from "@/components/Cards/instructorCard";

type instructorsListProps = {
  instructors: instructorsType[];
};

const InstructorsList = ({ instructors }: instructorsListProps) => {
  return (
    <div className="ml-auto mr-auto gap-4 sm:gap-6 md:gap-8 2xl:gap-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.fullName} instructor={instructor} />
      ))}
    </div>
  );
};

export { InstructorsList };
