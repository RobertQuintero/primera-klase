"use client";
import React from "react";

import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { WorkCard } from "@/components/Cards/workCard";
import { WorksType } from "@/types/worksType";

type worksListProps = {
  works: WorksType[];
};

const WorksList = ({ works }: worksListProps) => {
  const directions = ["up", "down", "left", "right"]; // Possible directions

  return (
    <div className="columns-1 gap-2 md:gap-3 sm:columns-2 lg:columns-3 xl:columns-4 ">
      {works.map((work, index) => {
        const randomDirection = directions[Math.floor(Math.random() * directions.length)]; // Select a random direction

        return (
          <AnimatedDivLeftRightUpDown
            key={work.title}
            direction={randomDirection}
            className={`flex flex-col break-inside-avoid h-auto mb-2 md:mb-3`}
          >
              <WorkCard work={work} />
          </AnimatedDivLeftRightUpDown>
        );
      })}
    </div>
  );
};

export { WorksList };