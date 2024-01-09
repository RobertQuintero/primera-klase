"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
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

import {
  ArrowLongRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import { EventType } from "@/types/eventType";
import { DateComponent } from "@/components/time/date";

type eventLatestProps = {
  eventLatest: EventType;
  placement?: "left" | "right";
};

const EventLatest = ({ placement, eventLatest }: eventLatestProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full h-full">
      <Card
        onPress={onOpen}
        isPressable
        className="sm:flex-row w-full max-h-[34rem] max-w-7xl mx-auto relative mb-4 sm:mb-6 md:mb-8 2xl:mb-10"
        radius="none"
        shadow="none"
      >

        {eventLatest.eventImage ? (
            <Image
              src={eventLatest.eventImage}
              alt={eventLatest.eventTitle}
              radius="none"
              width={1800}
              height={1800}
              className="h-full w-full object-cover object-center"
            />
        ) : null}

        <CardFooter className="bg-gradient-to-t from-background/0 via-background/10 to-background  p-2 sm:p-4  flex-col gap-1 md:absolute z-10 h-[50%]">
          <DateComponent
            className={` ${title({ size: "xl" })}`}
            iconClassName="hidden"
            Date={eventLatest.date}
          />
          <h1 className={` !line-clamp-1 ${title({ size: "lg" })}`}>
            {eventLatest.eventTitle}
          </h1>
          <Chip variant="dot" color="warning" className={`border-warning !text-black dark:!text-default-600  capitalize  ${paragraph({ size: "sm" })}`}>
            {eventLatest.eventType}
          </Chip>
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
            <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-3xl bg-default-100 ">
              <Image
                src={eventLatest.eventImage}
                alt={eventLatest.eventTitle}
                radius="none"
                width={800}
                height={800}
                className=" object-contain object-center "
              />
            </div>

            <div className="flex flex-col h-full w-full p-0 md:px-4 lg:px-6">
              <ModalHeader>
                <p className={` !font-bold ${title({ size: "lg" })}`}>
                  {eventLatest.eventTitle}
                </p>
              </ModalHeader>

              <div className="flex flex-col w-full gap-2 mb-4 sm:mb-6">
                <ScrollShadow hideScrollBar className="w-full  max-h-[8rem] ">
                  <p
                    className={`before:text-default-500 before:font-normal before:text-sm before:content-['Description__:__'] empty:hidden font-semibold ${paragraph(
                      { size: "sm" }
                    )}`}
                  >
                    {eventLatest.eventDescription}{" "}
                  </p>
                </ScrollShadow>
                <DateComponent
                  iconClassName="hidden"
                  Date={eventLatest.date}
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Date__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                />
                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Time__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {eventLatest.time}
                </p>
                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Event__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {eventLatest.eventType}
                </p>

                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Location__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {eventLatest.location}
                </p>

                {eventLatest.specialGuest &&
                eventLatest.specialGuest.length > 0 ? (
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p
                      className={` font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Preferences
                    </p>
                    <ul className="flex flex-col gap-3 py-2">
                      {eventLatest.specialGuest.map((guest) => (
                        <li key={guest.title} className="flex flex-wrap items-center">
                          <p className={`!text-default-500 capitalize mr-1 empty:hidden after:text-default-500 after:font-normal after:text-sm after:content-[',_'] ${paragraph({ size: "xs" })}`}>
                            {guest.title}
                          </p>
                          <p className={`capitalize  ${paragraph({ size: "sm" })}`}>
                            {guest.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}


              </div>
              {eventLatest.eventLink ? (
                <ModalFooter>
                  <Button
                    radius="none"
                    color="warning"
                    as={Link}
                    href={eventLatest.eventLink}
                    target={eventLatest.eventLink}
                    endContent={
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5" />
                    }
                  >
                    Event Link
                  </Button>
                </ModalFooter>
              ) : null}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { EventLatest };
