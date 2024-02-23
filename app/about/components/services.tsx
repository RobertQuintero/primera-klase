import {
  AnimatedDivLeftRightUpDown,
  AnimatedShow,
} from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { servicesType } from "@/types/servicesType";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

type aboutServicesProps = {
  aboutServices: servicesType[];
};
const AboutServices = ({ aboutServices }: aboutServicesProps) => {
  return (
    <div className="w-full h-full" id="services">
      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-col max-w-7xl gap-6 mx-auto"
      >
        <div className="p-2 bg-warning-500/20 border-2 border-solid border-warning-300 w-fit">
        <CubeTransparentIcon className="w-12 h-12 text-warning-700" />
        </div>
        <h2
          className={` text-warning  ${title(
            { size: "lg" }
          )}`}
        >
          Service we offer
        </h2>

        <p className={`!text-default-700 max-w-2xl ${title({ size: "xxl" })}`}>
          We are here to help you grow your business
        </p>

        <p className={`!text-default-500 max-w-2xl ${paragraph({ size: "lg" })}`}>
          We offer a wide range of services to help you get the most out of your
          business. Our services include web design, web development, SEO, and
          more. We are here to help you grow your business.
        </p>


      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto grid gap-4 sm:gap-8 grid-cols-2 lg:grid-cols-3 mt-8 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-64">
        {aboutServices.map((services, index) => (
          <AnimatedDivLeftRightUpDown
            key={services.title}
            direction="left"
            delay={0.3 * (index + 1)}
            className="w-full h-full"
          >
            <Card className={`p-0 bg-warning-500/5 dark:bg-warning/5 w-full h-full`} isPressable radius="none" isBlurred shadow="none" >
              <CardHeader className="p-2 md:p-4 gap-2 md:gap-4 sm:flex-row flex-col items-start">
                <Image
                  src={services.image}
                  alt={services.title}
                  width={100}
                  height={100}
                  radius="none"
                  className=" min-w-[4rem] min-h-[4rem] sm:max-w-[4rem] sm:max-h-[4rem] w-[3rem] h-[2rem]"
                />
                <div className="flex flex-col items-start max-w-[15rem]">
                  <p className={`text-default-600  capitalize ${title({ size: "lg" })}`}>
                    {services.title}
                  </p>
                                  <p className={`!text-default-500 ${paragraph({ size: "md" })}`}>
                    {services.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </div>
  );
};

export { AboutServices };
