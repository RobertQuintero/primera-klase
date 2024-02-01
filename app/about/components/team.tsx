"use client";
import { teamsType } from "@/types/teamsType";
import React from "react";
import { Image } from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
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
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        {teams.map((team) => (
          <div
            key={team.name}
            className="relative max-w-sm group overflow-hidden"
          >
            <Image src={team.image} alt={team.name} radius="none" />
            <div className="flex flex-col  px-4 py-1">
              <p
                className={`!font-semibold text-center capitalize text-warning ${title(
                  { size: "lg" }
                )}`}
              >
                {team.name}
              </p>
              <p
                className={`text-center uppercase font-semibold text-warning-300 ${paragraph(
                  { size: "md" }
                )}`}
              >
                {team.position}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center absolute z-10 top-[30rem] group-hover:top-0 h-full w-full bg-warning-50/10 animate duration-1000 group-hover:duration-1000 ease-in-out group-hover:ease-in-out  ">
              {team.socialMedia ? (
                <SocialMediaLink
                  socialMediaLinks={team.socialMedia}
                  classNameIcon={"text-warning-100"}
                />
              ) : null}
              <blockquote
                className={`italic empty:hidden !text-warning-50  ${paragraph({
                  size: "md",
                })} `}
              >
                {team.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { Teams };
