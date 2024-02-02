
import React from "react";
import { TalentsList } from "../components.tsx/talentsList";
import { getTalentsFemaleData } from "@/sanity/utils/sanity-talents-instructors";
import { title } from "@/components/primitives";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";

export const revalidate = 1;

export default async function Talents() {
  const TalentsFemale = await getTalentsFemaleData();

  return (
    <React.Fragment>
      <div className="flex flex-col items-center w-full">
        <AnimatedDivLeftRightUpDown direction="up" className="-mt-4 mb-4">
          <h1
          className={` text-warning -mt-4 mb-4 ${title(
            { size: "xxl",color:"yellow" }
          )}`}
        >
          Female
        </h1>
        </AnimatedDivLeftRightUpDown>
        <TalentsList talents={TalentsFemale} />
      </div>
    </React.Fragment>
  );
}
