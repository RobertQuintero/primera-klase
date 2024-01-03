"use client";
import React, {} from "react";
import {
  Button,
  Card,
  CardFooter,
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { AgeComponent } from "../time/age";
import { DateComponent } from "../time/date";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { WorksType } from "@/types/worksType";

type workCardProps = {
  work: WorksType;
};

const WorkCard = ({ work }: workCardProps) => {

  return (
    <React.Fragment>
      <Popover>
        <PopoverTrigger>
            <Card isPressable className=" max-w-sm" radius="none" isBlurred shadow="none">
                {work.portfolioImages ? (
                <Image
                    src={work.portfolioImages[0].image}
                    alt={work.title}
                    width={800}
                    height={800}
                    className=" object-cover object-center h-56 sm:h-[22rem] md:h-[25rem] 2xl:h-[28rem]"
                    radius="none"
                />
                ) : null}

            <CardFooter className="p-2 sm:p-4 justify-center">
            <h2 className="capitalize font-medium text-center text-md md:text-lg lg:text-xl xl:text-2xl">
                {work.title}
            </h2>
            </CardFooter>
            </Card>
        </PopoverTrigger>

        <PopoverContent>
              <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-xl bg-default-100 ">
                <Image
                  src={work.portfolioImages[0].image}
                  alt={work.title}
                  radius="none"
                  width={500}
                  height={500}
                  className="w-full max-h-80  sm:max-h-96   xl:max-h-[36rem] object-contain !object-center"
                />
              </div>

              <div className="flex flex-col h-full w-full p-0 md:px-4 lg:px-6">

                  <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                    {work.title}
                  </h4>





              </div>
      </PopoverContent>
     </Popover>
    </React.Fragment>
  );
};

export { WorkCard };
