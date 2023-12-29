"use client";
import React from "react";
import { instructorsType } from "@/types/instructorsType";
import { InstructorCard } from "@/components/Cards/instructorCard";


type instructorsListProps = {
  instructors: instructorsType[];
};

const InstructorsList = ({ instructors }: instructorsListProps) => {

  return (
    <div className="w-full mx-auto justify-center max-w-7xl  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
      {instructors.map((instructor) => (
          <InstructorCard key={instructor.fullName} instructor={instructor} />
      ))}
    </div>
  );
};

export { InstructorsList };
