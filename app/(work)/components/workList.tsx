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
    <div className="flex flex-col w-full">
      {works.map((work, index) => (
        <AnimatedDivLeftRightUpDown
          key={work.title}
          direction={index % 2 === 0 ? "left" : "right"}
          className={`w-fit h-fit my-8 ${index % 2 === 0 ? 'pl-8 md:pl-12 lg:pl-20 2xl:pl-28 mr-auto' : 'pr-8 md:pr-12 lg:pr-20 2xl:pr-28 ml-auto'}`}
        >
            <WorkCard placement={index % 2 === 0 ? "left" : "right"} work={work} />
        </AnimatedDivLeftRightUpDown>
      ))}
    </div>
  );
};

export { WorksList };
