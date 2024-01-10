"use client";
import React from "react";
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
  ScrollShadow,
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
import { AnimatedDivLeftRightUpDown } from "../animation/animatedDiv";
import SocialMediaShareWork from "../links/socialMediaShareWork";
import { ReadingTime, extractTextFromBlocks } from "../time/readingTime";

type workCardProps = {
  work: WorksType;
  placement?: "left" | "right";
};

const WorkCard = ({ placement, work }: workCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment>
      <Card
        onPress={onOpen}
        isPressable
        className=" max-w-2xl relative"
        radius="none"
        isBlurred
        shadow="none"
      >
        {work.portfolioImages ? (
          <Image
            isZoomed
            src={work.portfolioImages[0].image}
            alt={work.title}
            width={800}
            height={800}
            className=" object-cover object-center h-56 sm:h-[22rem] md:h-[28rem] 2xl:h-[36rem]"
            radius="none"
          />
        ) : null}

        <CardFooter className="p-2 sm:p-4 justify-center absolute z-20">
          <AnimatedDivLeftRightUpDown direction={placement} className="w-full">
            <h2 className="capitalize font-bold text-center text-lg md:text-xl lg:text-3xl xl:text-5xl">
              {work.title}
            </h2>
          </AnimatedDivLeftRightUpDown>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        classNames={{
          body: "flex xl:flex-row p-2 sm:p-4 lg:p-6",
          footer: "p-0 flex-col",
          header: "p-0  pb-2",
          base: "rounded-none",
        }}
      >
        <ModalContent>
          <ModalBody>
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
              <ModalHeader>
                <h4
                  className={`capitalize !font-bold ${title({ size: "xl" })}`}
                >
                  {work.title}
                </h4>
              </ModalHeader>
              <div className="flex flex-col w-full mb-4 ">
                <div className="flex flex-row w-full  gap-2">
                <DateComponent Date={work.date} />
                <ReadingTime
                  size="sm"
                  text={extractTextFromBlocks(work.body)}
                  averageWordsPerMinute={200}
                  className={` ${paragraph({ size: "xs" })}`}
                />
                </div>
                <ScrollShadow hideScrollBar className="w-full my-6  max-h-[10rem]  ">
                  <p className={`empty:hidden ${paragraph({ size: "md" })}`}>
                    {work.description}
                  </p>
                </ScrollShadow>
              </div>

              {work.services && work.services.length > 0 ? (
                <div className="flex flex-col mb-4 sm:mb-6">
                  <p className={` font-semibold  ${paragraph({ size: "sm" })}`}>
                    Services
                  </p>
                  <ul className="flex flex-wrap gap-3 py-2">
                    {work.services.map((service) => (
                      <li key={service.title}>
                        <Chip variant="dot" radius="none" color="warning">
                          {service.title}
                        </Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <ModalFooter className="">
                <div className="flex flex-row gap-4 w-full ">
                  <SocialMediaShareWork socialMediaShareWork={work} />

                  <Button
                    as={Link}
                    href={`/${work.slug}`}
                    endContent={
                      <ArrowLongRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                    }
                    radius="none"
                    className="w-full"
                    color="warning"
                  >
                    View Work Details
                  </Button>
                </div>
              </ModalFooter>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export { WorkCard };
