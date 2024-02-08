"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
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
import { DateComponent } from "../time/date";
import {
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { EventType } from "@/types/eventType";

type eventCardProps = {
  event: EventType;
  placement?: "left" | "right";
};

const EventCard = ({ placement, event }: eventCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment>
      <Card
        onPress={onOpen}
        isPressable
        className="sm:flex-row w-full bg-transparent"
        radius="none"
        shadow="sm"
      >
        {event.eventImage ? (
          <CardBody className="h-full p-0 w-full lg:w-64 xl:w-[30rem]">
            <Image
              src={event.eventImage}
              alt={event.eventTitle}
              radius="none"
              width={800}
              height={800}
              className=" w-full object-cover"
            />
          </CardBody>
        ) : null}

        <div className=" p-2 sm:p-4 flex flex-col gap-1 w-full">
          <DateComponent
            className={` ${title({ size: "lg" })}`}
            iconClassName="hidden"
            Date={event.date}
          />
          <h4 className={` !line-clamp-1 ${title({ size: "md" })}`}>
            {event.eventTitle}
          </h4>
          <p className={`line-clamp-2 ${paragraph({ size: "sm" })}`}>
            {event.eventDescription}
          </p>
        </div>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
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
                <p className={` !font-bold ${title({ size: "lg" })}`}>
                  {event.eventTitle}
                </p>
              </ModalHeader>

              <div className="flex flex-col w-full gap-2 mb-4 sm:mb-6">
                <ScrollShadow hideScrollBar className="w-full  max-h-[8rem] ">
                  <p
                    className={`before:text-default-500 before:font-normal before:text-sm before:content-['Description__:__'] empty:hidden font-semibold ${paragraph(
                      { size: "sm" }
                    )}`}
                  >
                    {event.eventDescription}{" "}
                  </p>
                </ScrollShadow>
                <DateComponent
                  iconClassName="hidden"
                  Date={event.date}
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Date__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                />
                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Time__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {event.time}
                </p>
                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Event__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {event.eventType}
                </p>

                <p
                  className={`before:text-default-500 before:font-normal before:text-sm before:content-['Location__:__'] empty:hidden font-semibold ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  {event.location}
                </p>

                {event.specialGuest &&
                event.specialGuest.length > 0 ? (
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p
                      className={` font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Preferences
                    </p>
                    <ul className="flex flex-col gap-3 py-2">
                      {event.specialGuest.map((guest) => (
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
              {event.eventLink ? (
                <ModalFooter>
                  <Button
                    radius="none"
                    color="warning"
                    as={Link}
                    href={event.eventLink}
                    target={event.eventLink}
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
    </React.Fragment>
  );
};

export { EventCard };
