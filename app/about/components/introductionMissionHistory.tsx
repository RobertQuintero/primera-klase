import {
  AnimatedDivLeftRightUpDown,
} from "@/components/animation/animatedDiv";
import { AnimatedLogo } from "@/components/animation/animatedLogo";
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
    <div className="flex flex-col w-full mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
      <div className="py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-about-background bg-no-repeat bg-center bg-contain  ">
        <AnimatedDivLeftRightUpDown direction="down">
          {/* <h2 className="font-extrabold text-center text text-default-900/5 text-[6rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem]"  >
            Primer Klase
          </h2> */}
          <AnimatedLogo delay={0} className="w-52 h-52 md:w-80 md:h-80 mx-auto"  />
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="up" delay={1}>
          <p className={`!text-default-500 text-center mx-auto max-w-5xl ${paragraph({ size: "xl",  })}`}>
            {introductionMissionHistory.introduction}
          </p>
        </AnimatedDivLeftRightUpDown>
      </div>
      <div className="py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-about-background3 bg-no-repeat bg-center bg-contain md:bg-cover">
        <div className="max-w-7xl mx-auto">
        <AnimatedDivLeftRightUpDown direction="left">
          <h2 className={`!font-bold  !text-5xl sm:!text-6xl lg:!text-7xl: xl:!text-8xl 2xl:!text-9xl font ${title({ size: "xxxl",color:"yellow"  })}`}>
            Mission
          </h2>
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="left" delay={1}>
          <p className={`!text-default-500 max-w-5xl pl-2 ${paragraph({ size: "lg" })}`}>
            {introductionMissionHistory.mission}
          </p>
        </AnimatedDivLeftRightUpDown>
        </div>
      </div>
      <div className="py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-about-background2 bg-no-repeat bg-left bg-contain md:bg-cover">
        <div className="max-w-7xl mx-auto">
          <AnimatedDivLeftRightUpDown direction="right" className="flex flex-col items-end">
            <h2 className={`!font-bold  max-w-5xl !text-5xl sm:!text-6xl lg:!text-7xl: xl:!text-8xl 2xl:!text-9xl ${title({ size: "xxxl",color:"yellow"  })}`}>
              History
            </h2>
          </AnimatedDivLeftRightUpDown>
          <AnimatedDivLeftRightUpDown direction="right" delay={1}>
            <p className={`!text-default-500 ml-auto max-w-5xl text-right pl-2 ${paragraph({ size: "lg" })}`}>
              {introductionMissionHistory.history}
            </p>
          </AnimatedDivLeftRightUpDown>
        </div>
      </div>
    </div>
  );
};

export { IntroductionMissionHistory };
