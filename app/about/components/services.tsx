import {
  AnimatedDivLeftRightUpDown,
  AnimatedShow,
} from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { servicesType } from "@/types/servicesType";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

type aboutServicesProps = {
  aboutServices: servicesType[];
};
const AboutServices = ({ aboutServices }: aboutServicesProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        direction="down"
        className="flex flex-col items-center"
      >
        <h2
          className={`!font-bold text-warning max-w-5xl !text-5xl sm:!text-6xl lg:!text-7xl: xl:!text-8xl ${title(
            { size: "xxxl" }
          )}`}
        >
          Service we offer
        </h2>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 py-14 sm:py-16 md:py-24 lg:py-28 xl:py-32 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        {aboutServices.map((services, index) => (
          <AnimatedDivLeftRightUpDown
            key={services.title}
            direction="right"
            delay={index}
            className="w-full h-full"
          >
            <Card shadow="none" isBlurred>
              <CardHeader className="gap-2 md:gap-4">
                <Image
                  src={services.image}
                  alt={services.title}
                  width={100}
                  height={100}
                  radius="none"
                  className=" w-20 h-20"
                />
                <p className={`text-warning ${title({ size: "lg" })}`}>
                  {services.title}
                </p>
              </CardHeader>
              <CardFooter>
                <p className={`!text-default-500 ${paragraph({ size: "lg" })}`}>
                  {services.description}
                </p>
              </CardFooter>
            </Card>
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </React.Fragment>
  );
};

export { AboutServices };
