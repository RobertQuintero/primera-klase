import {
  AnimatedDivLeftRightUpDown,
  AnimatedShow,
} from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { aboutType } from "@/types/aboutType";
import React from "react";

type introductionMissionHistoryProps = {
  introductionMissionHistory: aboutType;
};

const IntroductionMissionHistory = ({
  introductionMissionHistory,
}: introductionMissionHistoryProps) => {
  return (
    <div className="flex flex-col">
      <div className="place-self-end max-w-sm md:max-w-lg xl:max-w-3xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
        <AnimatedDivLeftRightUpDown direction="right">
          <h2 className="font-extrabold text-default-900/5 text-[6rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            Introduction
          </h2>
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="right" delay={1}>
          <p className={`!text-default-500 ${paragraph({ size: "xl" })}`}>
            {introductionMissionHistory.introduction}
          </p>
        </AnimatedDivLeftRightUpDown>
      </div>
      <div className="max-w-sm md:max-w-lg xl:max-w-3xl py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
        <AnimatedDivLeftRightUpDown direction="left">
          <h2 className="font-extrabold text-default-900/5 text-[6rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            Mission
          </h2>
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="left" delay={1}>
          <p className={`!text-default-500 ${paragraph({ size: "xl" })}`}>
            {introductionMissionHistory.mission}
          </p>
        </AnimatedDivLeftRightUpDown>
      </div>
      <div className="place-self-end relative max-w-sm md:max-w-lg xl:max-w-3xl  py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32">
        <AnimatedDivLeftRightUpDown direction="right" className="-ml-20">
          <h2 className="font-extrabold text-default-900/5 text-[6rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            History
          </h2>
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="right" delay={1}>
          <p className={`!text-default-500 ${paragraph({ size: "xl" })}`}>
            {introductionMissionHistory.history}
          </p>
        </AnimatedDivLeftRightUpDown>
      </div>
    </div>
  );
};

export { IntroductionMissionHistory };
