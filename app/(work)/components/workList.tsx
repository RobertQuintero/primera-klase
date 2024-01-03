"use client";
import React from "react";

import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { WorkCard } from "@/components/Cards/workCard";
import { WorksType } from "@/types/worksType";

type worksListProps = {
  works: WorksType[];
};

const WorksList = ({ works }: worksListProps) => {
  return (
    <div className="flex flex-col w-full  items-end">
      {works.map((work, index) => (
        <AnimatedDivLeftRightUpDown
          key={work.title}
          direction={index % 2 === 0 ? "left" : "right"}
          delay={index}
          className="w-fit h-fit bg-red-100"
        >
            <WorkCard  work={work} />
        </AnimatedDivLeftRightUpDown>
      ))}
    </div>
  );
};

export { WorksList };
