import { getTalentsData } from "@/sanity/utils/sanity-talents-instructors";
import { TalentsList } from "./components.tsx/talentsList";
import React from "react";

export const revalidate = 1;

export default async function Talents() {
  const Talents = await getTalentsData();

  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <TalentsList talents={Talents} />
      </div>
    </React.Fragment>
  );
}
