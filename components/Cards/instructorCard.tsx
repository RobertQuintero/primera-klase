"use client";
import React, {} from "react";
import {
  Button,
  Card,
  CardFooter,
  Chip,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { instructorsType } from "@/types/instructorsType";
import { DateRangeComponent } from "@/components/time/dateStartEnd";
import { AgeComponent } from "../time/age";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

type instructorCardProps = {
  instructor: instructorsType;
};

const InstructorCard = ({ instructor }: instructorCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment key={instructor.fullName}>
      <Card onPress={onOpen} isPressable className="w-full max-w-sm" radius="none" isBlurred shadow="none" >
        {instructor.portfolioImages ? (
          <Image isZoomed
            src={instructor.portfolioImages[0].image}
            alt={instructor.fullName}
            radius="none"
            width={800}
            height={800}
            className=" object-cover object-center h-56 sm:h-[22rem] md:h-[25rem] 2xl:h-[28rem]"
          />
        ) : null}

        <CardFooter className="p-2 sm:p-4 justify-center" >
          <h2 className="capitalize font-medium text-center text-md sm:text-xl lg:text-2xl xl:text-3xl">
            {instructor.fullName}
          </h2>
          {/* <h3 className={title({ size: "xl" })}>
                {instructor.specialties[0]}
              </h3> */}
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        classNames={{ body: "flex xl:flex-row p-2 sm:p-4 lg:p-6",footer: "p-0 ",header: "p-0  pb-2",base: "rounded-none" }}
      >
        <ModalContent>

          <ModalBody>
            <div className="flex justify-center items-center w-full bg-default-100 ">
              <Image
                src={instructor.portfolioImages[0].image}
                alt={instructor.fullName}
                radius="none"
                width={500}
                height={500}
                className="w-full  max-h-80  sm:max-h-96  xl:max-h-[36rem] object-contain !object-center"
              />
            </div>

            <div className="flex flex-col w-full p-0 md:px-4 lg:px-6">
              <ModalHeader>
                <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                  {instructor.fullName}
                </h4>
              </ModalHeader>

            <div className="flex flex-col w-full mb-4 sm:mb-6">
               <ScrollShadow
                  hideScrollBar
                  className="w-full  max-h-[7rem]  "
                >
              <p
                className={` empty:hidden ${paragraph(
                  { size: "md" }
                )}`}
              >
               {instructor.summary}
              </p>
              </ScrollShadow>

              <p
                className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Gender__:__'] font-semibold empty:hidden  ${paragraph(
                  { size: "md" }
                )}`}
              >
                {instructor.gender}
              </p>

              {instructor.dateOfBirth ? (
              <AgeComponent className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Age__:__'] font-semibold ${paragraph(
                  { size: "md" }
                )}`} Date={instructor.dateOfBirth} />
              ) : null}
              </div>

              {instructor.specialties && instructor.specialties.length > 0 ? (
              <div className="flex flex-col mb-4 sm:mb-6">
                <p
                  className={`font-semibold  ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  Specializes
                </p>
                <ul className="flex flex-wrap gap-3 py-2">
                  {instructor.specialties.map((specialty) => (
                    <li key={specialty}>
                      <Chip variant="dot" color="warning">
                        {specialty}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>
              ): null}

             {instructor.experience && instructor.experience.length > 0 ? (
              <div className="flex flex-col mb-4 sm:mb-6">
                <p
                  className={`font-semibold  ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  Experience
                </p>
                      <div
                        className="flex flex-col w-full py-2"
                        key={instructor.experience[instructor.experience.length - 1].company}
                      >
                        <p
                          className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Company__:__'] font-semibold empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {instructor.experience[instructor.experience.length - 1].company}
                        </p>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['Position__:__'] empty:hidden font-semibold ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {instructor.experience[instructor.experience.length - 1].position}
                        </p>
                        <DateRangeComponent
                          className={`font-semibold ${paragraph({ size: "xs" })}`}
                          startDate={instructor.experience[instructor.experience.length - 1].startDate}
                          endDate={instructor.experience[instructor.experience.length - 1].endDate}
                          iconClassName="w-3.5 h-3.5  sm:w-4 sm:h-4"
                        />
                      </div>
                  </div>
                ) : null}



                {instructor.education && instructor.education.length > 0 ? (
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p
                      className={` font-semibold ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Education
                    </p>
                      <div className="flex flex-col w-full py-2" key={instructor.education[instructor.education.length - 1].school}>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['School__:__'] empty:hidden font-semibold ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {instructor.education[instructor.education.length - 1].school}
                        </p>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['Degree__:__'] empty:hidden font-semibold ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {instructor.education[instructor.education.length - 1].degree}
                        </p>
                        <DateRangeComponent
                          className={`font-semibold empty:hidden  ${paragraph({ size: "xs" })}`}
                          startDate={instructor.education[instructor.education.length - 1].startDate}
                          endDate={instructor.education[instructor.education.length - 1].endDate}
                          iconClassName=" w-3.5 h-3.5  sm:w-4 sm:h-4 "
                        />
                      </div>
                  </div>
                ) : null}

              <ModalFooter>
                <div className="flex flex-col w-full ">
                  <div className="flex flex-wrap">
                  {instructor.socialMedia ? (
                    <SocialMediaLink
                      socialMediaLinks={instructor.socialMedia}
                    />
                  ) : null}
                  {instructor.portfolioFile ? (
                  <Tooltip radius="none" content="Download Portfolio Documents">
                    <Button
                      download={instructor.portfolioFile}
                      href={instructor.portfolioFile}
                      as={Link}
                      target="_blank"
                      radius="none"
                      variant="light"
                      isIconOnly
                    >
                      <DocumentArrowDownIcon className="text-default-600 w-5 h-5 md:w-7 md:h-7" />
                    </Button>
                  </Tooltip>
                  ) : null}
                </div>
                </div>
              </ModalFooter>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export { InstructorCard };
