"use client";
import React from "react";
import { TalentsType } from "@/types/talentsType.";
import { TalentCard } from "@/components/Cards/talentCard";


type talentsListProps = {
  talents: TalentsType[];
};

const TalentsList = ({ talents }: talentsListProps) => {

  return (
    <div className="w-full mx-auto justify-center max-w-7xl  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
      {talents.map((talent) => (
          <TalentCard key={talent.fullName}  talent={talent} />
      ))}
    </div>
  );
};

export { TalentsList };