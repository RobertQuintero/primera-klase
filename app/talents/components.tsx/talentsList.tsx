"use client";
import React from "react";
import { TalentsType } from "@/types/talentsType.";
import { TalentCard } from "@/components/Cards/talentCard";

type talentsListProps = {
  talents: TalentsType[];
};

const TalentsList = ({ talents }: talentsListProps) => {
  return (
    <div className="w-fit gap-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-red-100">
      {talents.map((talent) => (
        <TalentCard key={talent.fullName} talent={talent} />
      ))}
    </div>
  );
};

export { TalentsList };
