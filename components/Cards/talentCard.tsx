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
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { AgeComponent } from "../time/age";
import { TalentsType } from "@/types/talentsType.";
import { DateComponent } from "../time/date";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import SocialMediaShareTalent from "../links/socialMediaShareTalent";

type talentCardProps = {
  talent: TalentsType;
};

const TalentCard = ({ talent }: talentCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();



  return (
    <React.Fragment>
      <Card onPress={onOpen} isPressable className=" max-w-sm" radius="none" isBlurred shadow="none">
        {talent.portfolioImages ? (
          <Image isZoomed
            src={talent.portfolioImages[0].image}
            alt={talent.fullName}
            width={800}
            height={800}
            className=" object-cover object-center h-56 sm:h-[22rem] md:h-[25rem] 2xl:h-[28rem]"
            radius="none"
          />
        ) : null}

        <CardFooter className="p-2 sm:p-4 justify-center">
         <h2 className="capitalize font-medium text-center text-md md:text-lg lg:text-xl xl:text-2xl">
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
          base: "rounded-none",
        }}
      >
        <ModalContent>
          <ModalBody>
              <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-xl bg-default-100 ">
                <Image
                  src={talent.portfolioImages[0].image}
                  alt={talent.fullName}
                  radius="none"
                  width={500}
                  height={500}
                  className="w-full max-h-80  sm:max-h-96   xl:max-h-[36rem] object-contain !object-center"
                />
              </div>

              <div className="flex flex-col h-full w-full p-0 md:px-4 lg:px-6">
                <ModalHeader>
                  <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                    {talent.fullName}
                  </h4>
                </ModalHeader>
                <div className="flex flex-row  justify-between mb-4 ">
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
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p
                      className={` font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Preferences
                    </p>
                    <ul className="flex flex-wrap gap-3 py-2">
                      {talent.modelingPreferences.map((preferences) => (
                        <li key={preferences.modelingPreference}>
                          <Chip variant="dot" radius="none" color="warning">
                            {preferences.modelingPreference}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {talent.achievements && talent.achievements.length > 0 ? (
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p className={`rounded-full font-semibold ${paragraph({ size: "sm" })}`}>
                      Achievements
                    </p>
                    <div
                      className="flex flex-col w-full gap-1 py-2"
                      key={talent.achievements[talent.achievements.length - 1].achievement}
                    >
                      <p
                        className={`before:text-default-500 before:font-normal before:text-sm before:content-['Title__:__'] font-semibold empty:hidden ${paragraph({ size: "sm" })}`}
                      >
                        {talent.achievements[talent.achievements.length - 1].achievement}
                      </p>
                      <p
                        className={`before:text-default-500 before:font-normal before:text-sm before:content-['Description__:__'] empty:hidden font-semibold ${paragraph({ size: "sm" })}`}
                      >
                        {talent.achievements[talent.achievements.length - 1].description}
                      </p>
                      <DateComponent
                        className={paragraph({ size: "sm" })}
                        Date={talent.achievements[talent.achievements.length - 1].year}
                        iconClassName="text-default-500 "
                      />
                    </div>
                  </div>
                ) : null}

                <ModalFooter className="">
                 {talent.socialMedia ? (
                      <SocialMediaLink socialMediaLinks={talent.socialMedia} />
                  ) : null}
                  <div className="flex flex-row gap-4 w-full ">
                  {talent.portfolioFile ? (
                  <Tooltip radius="none" content="Download Portfolio Documents">
                    <Button
                      download={talent.portfolioFile}
                      href={talent.portfolioFile}
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

                  <SocialMediaShareTalent socialMediaShareTalent={talent} />


                  <Button as={Link} href={`/talents/${talent.slug}`} endContent={<ArrowLongRightIcon className="w-4 h-4 md:w-5 md:h-5" />} radius="none" className="w-full" color="warning">
                    View Portfolio
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

export { TalentCard };
