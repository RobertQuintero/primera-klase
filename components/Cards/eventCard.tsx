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
import { AnimatedDivLeftRightUpDown } from "../animation/animatedDiv";
import { EventType } from "@/types/eventType";

type eventCardProps = {
  event: EventType;
  placement?: "left" | "right";
};

const EventCard = ({ placement, event }: eventCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment>
      <Card onPress={onOpen} isPressable className="flex-row w-full " radius="none"  shadow="sm">
        {event.eventImage ? (
         <div className="flex justify-center items-center w-full h-full ">
                <Image
                  isZoomed
                  src={event.eventImage}
                  alt={event.eventTitle}
                  radius="none"
                  width={500}
                  height={500}
                  className="w-full max-h-20  sm:max-h-96   xl:max-h-[36rem] object-cover !object-center"
                />
        </div>
        ) : null}
        <div className="p-2 sm:p-4 flex flex-col w-full">
         <DateComponent className="!gap-1 md:!gap-2" iconClassName="!w-3.5 !h-3.5 sm:!w-4 sm:!h-4" Date={event.date} />
         <h3 className="capitalize font-bold text-default-700 text-left text-base md:text-lg lg:text-xl 2xl:text-2xl">
            {event.eventTitle}
         </h3>
        </div>
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
              <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-3xl bg-default-100 ">
                <Image
                  src={event.eventImage}
                  alt={event.eventTitle}
                  radius="none"
                  width={800}
                  height={800}
                  className=" object-contain object-center "
                />
              </div>

              <div className="flex flex-col h-full w-full p-0 md:px-4 lg:px-6">
                <ModalHeader>
                  <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                    {event.eventTitle}
                  </h4>
                </ModalHeader>

              </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export { EventCard };
