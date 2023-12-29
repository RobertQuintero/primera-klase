"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
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
import { instructorsType } from "@/types/instructorsType";
import { DateRangeComponent } from "@/components/time/dateStartEnd";
import { AgeComponent } from "../time/age";

type instructorCardProps = {
  instructor: instructorsType;
};

const InstructorCard = ({ instructor }: instructorCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <React.Fragment key={instructor.fullName}>
      <Card onPress={onOpen} isPressable className="">
        {instructor.portfolioImages ? (
          <Image
            src={instructor.portfolioImages[0].image}
            alt={instructor.fullName}
            width={800}
            height={800}
            className=" object-cover object-center h-72 md:h-80 xl:h-96"
            classNames={{
              zoomedWrapper: "rounded-b-none rounded-t-lg ",
              img: "rounded-b-none rounded-t-xl ",
            }}
          />
        ) : null}

        <CardFooter>
          <h2 className={`pl-3 pb-3 !font-bold ${title({ size: "xl" })}`}>
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
        classNames={{ body: "flex xl:flex-row p-2 sm:p-4 lg:p-6",footer: "p-0 ",header: "p-0  pb-2"}}
      >
        <ModalContent>

          <ModalBody>
          <ScrollShadow className="flex flex-col sm:flex-row w-full h-full sm:h-fit " hideScrollBar>
            <div className="flex  w-full sm:max-w-md lg:max-w-xl bg-default-100 rounded-md">
              <Image
                src={instructor.portfolioImages[0].image}
                alt={instructor.fullName}
                radius="sm"
                width={500}
                height={500}
                className="w-full h-full object-contain !object-center"
              />
            </div>

            <div className="flex flex-col w-full p-0 md:px-4 lg:px-6">
              <ModalHeader>
                <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                  {instructor.fullName}
                </h4>
              </ModalHeader>

              <p
                className={`py-2 empty:hidden ${paragraph(
                  { size: "md" }
                )}`}
              >
               {instructor.summary}
              </p>


              <p
                className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Gender__:__'] font-semibold empty:hidden  ${paragraph(
                  { size: "md" }
                )}`}
              >
                {instructor.gender}
              </p>

              {instructor.dateOfBirth ? (
              <AgeComponent className={`font-semibold mb-2 ${paragraph(
                  { size: "md" }
                )}`} Date={instructor.dateOfBirth} />
              ) : null}

              {instructor.specialties && instructor.specialties.length > 0 ? (
              <div className="flex flex-col border border-default-200 rounded-md relative my-4 p-2">
                <p
                  className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  Specializes
                </p>
                <ul className="flex flex-wrap gap-3 px-2 py-2">
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
              <div className="flex flex-col border border-default-200 rounded-md relative my-4 p-2">
                <p
                  className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  Experience
                </p>
                { instructor.experience.map((experience) => (
                      <div
                        className="flex flex-col w-full px-2 py-2"
                        key={experience.company}
                      >
                        <p
                          className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Company__:__'] font-semibold empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {experience.company}
                        </p>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['Position__:__'] empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {experience.position}
                        </p>
                        <DateRangeComponent
                          className={paragraph({ size: "xs" })}
                          startDate={experience.startDate}
                          endDate={experience.endDate}
                          iconClassName="w-3.5 h-3.5  sm:w-4 sm:h-4"
                        />
                        <Divider className="mt-4" />
                      </div>
                    ))}
                  </div>
                ) : null}



                {instructor.education && instructor.education.length > 0 ? (
                  <div className="flex flex-col border border-default-200 rounded-md relative my-4 p-2 empty:hidden ">
                    <p
                      className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Education
                    </p>

                    {instructor.education.map((education) => (
                      <div className="flex flex-col w-full px-2 py-2" key={education.school}>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['School__:__'] empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {education.school}
                        </p>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['Degree__:__'] empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {education.degree}
                        </p>
                      {education.startDate && education.endDate ? (
                        <DateRangeComponent
                          className={` empty:hidden  ${paragraph({ size: "xs" })}`}
                          startDate={education.startDate}
                          endDate={education.endDate}
                          iconClassName=" w-3.5 h-3.5  sm:w-4 sm:h-4 "
                        />
                      ) : null}

                      </div>
                    ))}
                  </div>
                ) : null}

              <ModalFooter>
                <div className="flex flex-col w-full border border-default-200 rounded-md relative my-4 px-1 py-3">
                <p
                  className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                    { size: "sm" }
                  )}`}
                >
                  Contact info
                </p>
                  {instructor.socialMedia ? (
                    <SocialMediaLink
                      socialMediaLinks={instructor.socialMedia}
                    />
                  ) : null}
                </div>
              </ModalFooter>
            </div>
            </ScrollShadow>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export { InstructorCard };
