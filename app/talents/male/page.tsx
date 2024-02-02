
import React from "react";
import { TalentsList } from "../components.tsx/talentsList";
import { getTalentsMaleData } from "@/sanity/utils/sanity-talents-instructors";
import { title } from "@/components/primitives";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";

export const revalidate = 1;

export default async function Talents() {
  const TalentsMale = await getTalentsMaleData();

  return (
    <React.Fragment>
      <div className="flex flex-col items-center w-full">
        <AnimatedDivLeftRightUpDown direction="up" className="-mt-4 mb-4">
          <h1
          className={` text-warning  ${title(
            { size: "xxl" }
          )}`}
        >
          Male
        </h1>
        </AnimatedDivLeftRightUpDown>
        <TalentsList talents={TalentsMale} />
      </div>
    </React.Fragment>
  );
}
