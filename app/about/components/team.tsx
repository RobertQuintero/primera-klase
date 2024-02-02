"use client";
import { teamsType } from "@/types/teamsType";
import React from "react";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { TeamCard } from "@/components/Cards/teamCard";
import { paragraph, title } from "@/components/primitives";
type teamsProps = {
  teams: teamsType[];
};

const Teams = ({ teams }: teamsProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        direction="down"
        className="flex flex-col items-center"
      >
        <h2
          className={`!font-bold text-warning max-w-5xl !text-5xl sm:!text-6xl lg:!text-7xl: xl:!text-8xl ${title(
            { size: "xxxl" }
          )}`}
        >
          Our Team
        </h2>
        <p
          className={`!text-default-500 max-w-5xl mt-2 ${paragraph(
            { size: "lg" }
          )}`}
        >
          Meet the team behind the scenes
        </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        {teams.map((team, index) => (
          <AnimatedDivLeftRightUpDown direction="up" key={team.name}>
            <TeamCard key={team.name} team={team} />
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </React.Fragment>
  );
};

export { Teams };
