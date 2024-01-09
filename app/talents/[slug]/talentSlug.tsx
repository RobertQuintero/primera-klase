"use client";

import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { SocialMediaShareTalent } from "@/components/links/socialMediaShareTelent";
import { paragraph, title } from "@/components/primitives";
import { AgeComponent } from "@/components/time/age";
import { DateComponent } from "@/components/time/date";
import { TalentsType } from "@/types/talentsType.";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import { Button, Chip, Divider, Image, Link, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

type talentSlugProps = {
  params: { slug: string };
  talent: TalentsType;
};

const TalentSlug = ({ talent, params }: talentSlugProps) => {
  const info = [
    { label: "Gender", value: talent.gender },
    { label: "Nationality", value: talent.nationality },
    { label: "Height", value: talent.height },
    { label: "Weight", value: talent.weight },
    { label: "Hair_Color", value: talent.hairColor },
    { label: "Eye_Color", value: talent.eyeColor },
    { label: "Bust", value: talent.bust },
    { label: "Waist", value: talent.waist },
    { label: "Hips", value: talent.hips },
    { label: "Shoe_Size", value: talent.shoeSize },
    { label: "Dress_Size", value: talent.dressSize },
    { label: "Pants_Size", value: talent.pantsSize },
    { label: "Tattoos", value: talent.tattoos ? "Yes" : "No" },
    { label: "Piercings", value: talent.piercings ? "Yes" : "No" },
  ];
  return (
    <article className="w-full h-full ">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10 xl:gap-20 w-full  max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full  bg-default-100 ">
          <Image
            src={talent.portfolioImages[0].image}
            alt={talent.fullName}
            radius="none"
            width={500}
            height={500}
            className="w-full  max-h-80  sm:max-h-96   xl:max-h-[36rem] object-contain !object-center"
          />
        </div>

        <div className="grid grid-cols-8  w-full  ">
          <h1 className={`col-span-8  !font-bold ${title({ size: "xxl" })}`}>
            {talent.fullName}
          </h1>
          <div className="col-span-4 flex flex-col w-full ">
            {talent.dateOfBirth ? (
              <AgeComponent
                className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Age__:__'] font-semibold ${paragraph(
                  {
                    size: "md",
                  }
                )}`}
                Date={talent.dateOfBirth}
              />
            ) : null}

            {info.map((item, index) =>
              item.value ? (
                <p
                  key={index}
                  className={`before:text-default-500 before:font-normal  before:text-sm before:content-['${
                    item.label
                  }__:__'] font-semibold empty:hidden ${paragraph({
                    size: "md",
                  })}`}
                >
                  {item.value}
                </p>
              ) : null
            )}
          </div>
          <div className="col-span-4  flex flex-col w-full ">
            <p
              className={`col-span-8 px-2 pb-2 !font-bold ${title({
                size: "lg",
              })}`}
            >
              Preferences
            </p>
            {talent.modelingPreferences &&
            talent.modelingPreferences.length > 0 ? (
              <ul className="flex flex-col gap-3 px-2 py-2">
                {talent.modelingPreferences.map((preferences) => (
                  <li key={preferences.modelingPreference}>
                    <Chip variant="dot" radius="none" color="warning">
                      {preferences.modelingPreference}
                    </Chip>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-8 w-full my-8 sm:my-12 ">
        <div className="col-span-8 sm:col-span-4  flex flex-col w-full ">
          {talent.achievements && talent.achievements.length > 0 ? (
            <React.Fragment>
              <p className={`col-span-8  !font-bold ${title({ size: "lg" })}`}>
                Achievements
              </p>
              {talent.achievements.map((achievement) => (
                <div
                  className="flex flex-col w-full gap-1 "
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
                    className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Description__:__'] empty:hidden font-semibold ${paragraph(
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

                  {talent.achievements.length > 1 ? (
                    <Divider className="my-2" />
                  ) : null}
                </div>
              ))}
            </React.Fragment>
          ) : null}
        </div>

        <div className="col-span-8 sm:col-span-4 flex flex-row w-full justify-center ">
          {talent.socialMedia ? (
            <SocialMediaLink socialMediaLinks={talent.socialMedia} />
          ) : null}

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
        </div>
      </div>

      <div className="w-full mx-auto max-w-7xl  columns-2 md:columns-3 gap-2 md:gap-6 xl:gap-8 ">
        {/* // start from 1 to avoid the first image */}
        {talent.portfolioImages.slice(1).map((image) => (
          <div
            className="flex flex-col break-inside-avoid h-auto "
            key={image.title}
          >
            <motion.div
              className="break-inside-avoid-page mb-2 md:mb-6 xl:mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={image.image}
                alt={talent.fullName}
                radius="none"
                width={500}
                height={500}
                className="w-full !h-fit object-contain !object-center"
                classNames={{
                  wrapper: " !h-fit",
                  img: "!h-fit ",
                  blurredImg: "!h-fit",
                  zoomedWrapper: "!h-fit",
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </article>
  );
};

export { TalentSlug };
