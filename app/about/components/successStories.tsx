// testimonials.tsx

import { SuccessStoriesCard } from "@/components/Cards/successStoriesCard";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { SuccessStories } from "@/types/successStoriesType";
import React from "react";

type aboutSuccessStoriesProps = {
  aboutSuccessStories: SuccessStories;
};

const AboutSuccessStories = ({
  aboutSuccessStories,
}: aboutSuccessStoriesProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        direction="down"
        className="flex flex-col items-center "
      >
        <h2
          className={`!font-bold mb-8 text-warning max-w-7xl !text-5xl sm:!text-6xl lg:!text-7xl: xl:!text-8xl ${title(
            { size: "xxxl" }
          )}`}
        >
          Success Stories of our Clients
        </h2>
        <p className={`max-w-2xl text-center ${paragraph({size:"md"})}`}>
          Our clients have achieved great success with our services. Here are
          some of the success stories of our clients who have achieved their
          goals with our services.
        </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto my-8 sm:mb-16 md:mb-24 xl:mb-32">
        <SuccessStoriesCard successStories={aboutSuccessStories} className="max-w-xl mx-auto"/>
      </div>
    </React.Fragment>
  );
};

export { AboutSuccessStories };
