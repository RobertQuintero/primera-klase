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
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { DateRangeComponent } from "@/components/time/dateStartEnd";
import { AgeComponent } from "../time/age";
import { TalentsType } from "@/types/talentsType.";
import { DateComponent } from "../time/date";
import { ArrowDownTrayIcon, ArrowLongRightIcon, DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type talentCardProps = {
  talent: TalentsType;
};

const TalentCard = ({ talent }: talentCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();



  return (
    <React.Fragment>
      <Card onPress={onOpen} isPressable className="">
        {talent.portfolioImages ? (
          <Image
            src={talent.portfolioImages[0].image}
            alt={talent.fullName}
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
            {talent.fullName}
          </h2>
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
        }}
      >
        <ModalContent>
          <ModalBody>
            <ScrollShadow
              className="flex flex-col sm:flex-row w-full h-full sm:h-fit "
              hideScrollBar
            >
              <div className="flex  w-full sm:max-w-md lg:max-w-xl bg-default-100 rounded-md">
                <Image
                  src={talent.portfolioImages[0].image}
                  alt={talent.fullName}
                  radius="sm"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain !object-center"
                />
              </div>

              <div className="flex flex-col w-full p-0 md:px-4 lg:px-6">
                <ModalHeader>
                  <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                    {talent.fullName}
                  </h4>
                </ModalHeader>
                <div className="flex flex-row justify-between pb-3">
                  <div>
                    {talent.dateOfBirth ? (
                      <AgeComponent
                        className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Age__:__'] font-semibold ${paragraph(
                          {
                            size: "sm",
                          }
                        )}`}
                        Date={talent.dateOfBirth}
                      />
                    ) : null}

                    {/* {info.map((item, index) =>
                    item.value ? (
                      <p
                        key={index}
                        className={`before:text-default-500 before:font-normal before:text-sm before:content-['${
                          item.label
                        }__:__'] font-semibold empty:hidden ${paragraph({
                          size: "sm",
                        })}`}
                      >
                        {item.value}
                      </p>
                    ) : null
                  )} */}

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Gender__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.gender}
                    </p>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Nationality__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.nationality}
                    </p>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Height__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.height}
                    </p>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Weight__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.weight}
                    </p>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Hair_Color__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.hairColor}
                    </p>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Eye_Color__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.eyeColor}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Bust__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.bust}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Waist__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.waist}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Hips__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.hips}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Shoe_Size__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.shoeSize}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Dress_Size__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.dressSize}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Pants_Size__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.pantsSize}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Tattoos__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.tattoos ? "Yes" : "No"}
                    </p>

                    <p
                      className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Piercing__:__'] font-semibold empty:hidden  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      {talent.piercings ? "Yes" : "None"}
                    </p>
                  </div>
                </div>

                {talent.modelingPreferences &&
                talent.modelingPreferences.length > 0 ? (
                  <div className="flex flex-col border border-default-200 rounded-md relative my-4 p-2">
                    <p
                      className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                    {/* // Goog nameing convention for this   */}
                      Preferences
                    </p>
                    <ul className="flex flex-wrap gap-3 px-2 py-2">
                      {talent.modelingPreferences.map((preferences) => (
                        <li key={preferences.modelingPreference}>
                          <Chip variant="dot" color="warning">
                            {preferences.modelingPreference}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {talent.achievements && talent.achievements.length > 0 ? (
                  <div className="flex flex-col border border-default-200 rounded-md relative my-4 p-2">
                    <p
                      className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Achievements
                    </p>
                    {talent.achievements.map((achievement) => (
                      <div
                        className="flex flex-col w-full gap-1 px-2 py-2"
                        key={achievement.achievement}
                      >
                        <p
                          className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Title__:__'] font-semibold empty:hidden  ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {achievement.achievement}
                        </p>
                        <p
                          className={`before:text-default-500 before:text-sm  before:content-['Description__:__'] empty:hidden font-semibold ${paragraph(
                            { size: "sm" }
                          )}`}
                        >
                          {achievement.description}
                        </p>
                        <DateComponent
                          className={paragraph({ size: "sm" })}
                          Date={achievement.year}
                          iconClassName="text-default-500 "
                        />
                        <Divider className="mt-4" />
                      </div>
                    ))}
                  </div>
                ) : null}

                <ModalFooter >
                  <div className="flex flex-col w-full border border-default-200 rounded-md relative my-4 px-1 py-3">
                    <p
                      className={`absolute left-2 -top-3.5 bg-white dark:bg-default-50 rounded-full font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Contact info
                    </p>
                    {talent.socialMedia ? (
                      <SocialMediaLink socialMediaLinks={talent.socialMedia} />
                    ) : null}
                  </div>
                  <div className="flex flex-row gap-4 w-full">
                  <Tooltip content="Download Portfolio Documents">
                    <Button isIconOnly radius="sm" className=" bg-default-100">
                    <ArrowDownTrayIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Button>
                  </Tooltip>
                  <Button as={Link} href={`/talents/${talent.slug}`} endContent={<ArrowLongRightIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />} radius="sm" className="w-full" color="warning">
                    View Portfolio
                  </Button>
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

export { TalentCard };
