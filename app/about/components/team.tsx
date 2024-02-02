"use client";
import { teamsType } from "@/types/teamsType";
import React from "react";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { TeamCard } from "@/components/Cards/teamCard";
import { paragraph, title } from "@/components/primitives";
import { UserGroupIcon } from "@heroicons/react/24/solid";
type teamsProps = {
  teams: teamsType[];
};

const Teams = ({ teams }: teamsProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-col max-w-7xl gap-6 mx-auto"
      >
        <div className="p-2 bg-warning-500/20 border-2 border-solid border-warning-300 w-fit">
          <UserGroupIcon className="w-12 h-12 text-warning-700" />
          </div>
          <h2
            className={` text-warning  ${title(
              { size: "lg" }
            )}`}
          >
            Our team
          </h2>

          <p className={`!text-default-700 max-w-2xl ${title({ size: "xxl" })}`}>
            Meet the team behind the scenes
          </p>

          <p className={`!text-default-500 max-w-2xl ${paragraph({ size: "lg" })}`}>
            Our team is made up of talented individuals who are passionate about
            what they do. We are dedicated to providing the best service to our
            clients and are always looking for ways to improve.
          </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-64">
        {teams.map((team, index) => (
          <AnimatedDivLeftRightUpDown direction="right" key={team.name} delay={index}>
            <TeamCard key={team.name} team={team} />
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </React.Fragment>
  );
};

export { Teams };
