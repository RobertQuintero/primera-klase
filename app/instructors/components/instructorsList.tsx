"use client";
import React from "react";
import { instructorsType } from "@/types/instructorsType";
import { InstructorCard } from "@/components/Cards/instructorCard";


type instructorsListProps = {
  instructors: instructorsType[];
};

const InstructorsList = ({ instructors }: instructorsListProps) => {

  return (
    <div className="w-full justify-center max-w-7xl  flex flex-wrap gap-4 md:gap-6 xl:gap-10 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
      {instructors.map((instructor) => (
          <InstructorCard key={instructor.fullName} instructor={instructor} />
      ))}
    </div>
  );
};

export { InstructorsList };
