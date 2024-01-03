"use client";
import React from "react";
import { TalentsType } from "@/types/talentsType.";
import { TalentCard } from "@/components/Cards/talentCard";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";

type talentsListProps = {
  talents: TalentsType[];
};

const TalentsList = ({ talents }: talentsListProps) => {
  return (
    <div className="ml-auto mr-auto gap-4 sm:gap-6 md:gap-8 2xl:gap-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {talents.map((talent, index) => (
        <AnimatedDivLeftRightUpDown key={talent.fullName} direction="up" delay={index} className="w-full h-full">
            <TalentCard  talent={talent} />
        </AnimatedDivLeftRightUpDown>
      ))}
    </div>
  );
};

export { TalentsList };
