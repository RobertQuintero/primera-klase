"use client";
import React from "react";
import { TalentsType } from "@/types/talentsType.";
import { TalentCard } from "@/components/Cards/talentCard";

type talentsListProps = {
  talents: TalentsType[];
};

const TalentsList = ({ talents }: talentsListProps) => {
  return (
    <div className="ml-auto mr-auto gap-4 sm:gap-6 md:gap-8 2xl:gap-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {talents.map((talent) => (
        <TalentCard key={talent.fullName} talent={talent} />
      ))}
    </div>
  );
};

export { TalentsList };
