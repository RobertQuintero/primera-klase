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
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { instructorsType } from "@/types/instructorsType";
import { DateRangeComponent } from "@/components/time/dateStartEnd";

type instructorCardProps = {
  instructor: instructorsType;
};

const InstructorCard = ({ instructor }: instructorCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
        <React.Fragment key={instructor.fullName}>
          <Card onPress={onOpen} isPressable className="">
            <Image
              src={instructor.portfolioImages[0].image}
              alt={instructor.fullName}
              width={500}
              height={500}
              className="w-96 object-cover object-center h-96"
              classNames={{
                zoomedWrapper: "rounded-b-none rounded-t-lg ",
                img: "rounded-b-none rounded-t-xl ",
              }}
            />
            <CardFooter>
              <h2 className={`!font-bold ${title({ size: "xl" })}`}>{instructor.fullName}</h2>
              <h3 className={title({ size: "xl" })}>
                {instructor.specialties[0]}
              </h3>
            </CardFooter>
          </Card>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
            <ModalContent>
              <p> {instructor.fullName} </p>
              <p>{instructor.gender}</p>
              <ul className="flex flex-col">
                {instructor.specialties.map((specialty) => (
                  <li key={specialty}>
                    <Chip variant="dot" color="warning">
                      {specialty}
                    </Chip>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col">
                {instructor.experience.map((experience) => (
                  <div className="flex flex-col" key={experience.company}>
                    <p>{experience.company}</p>
                    <p>{experience.position}</p>
                    <DateRangeComponent
                      className={paragraph({ size: "xs" })}
                      startDate={experience.startDate}
                      endDate={experience.endDate}
                      iconClassName="w-3.5 h-3.5  sm:w-4 sm:h-4"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                {instructor.socialMedia ? (
                  <SocialMediaLink socialMediaLinks={instructor.socialMedia} />
                ) : null}
              </div>
            </ModalContent>
          </Modal>
        </React.Fragment>
  );
};

export { InstructorCard };
