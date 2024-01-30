//emails/emailMaleResponse.tsx
import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { siteConfig } from "@/config/site";

type EmailToPrimeraMaleApplicationProps = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  instagramUrl: string;
  phoneNumber: string;
  address: string;
  yourStory: string;

  //Measurements
  height: string;
  weight: string;
  hairColor: string;
  eyeColor: string;
  hips: string;
  shoeSize: string;
  pantsSize: string;
  tattoos: string;
  piercings: string;

  // Polaroid
  imageFront: string;
  imageProfile: string;
  imageDegree: string;
  imageTopDown: string;
};

const EmailToPrimeraMaleApplication: React.FC<EmailToPrimeraMaleApplicationProps> = ({
  firstName,
  lastName,

  instagramUrl,
  email,

  dateOfBirth,
  nationality,

  phoneNumber,
  address,

  yourStory,

  //Measurements
  height,
  weight,
  hairColor,
  eyeColor,
  hips,
  shoeSize,
  pantsSize,
  tattoos,
  piercings,

  // Polaroid
  imageFront,
  imageProfile,
  imageDegree,
  imageTopDown,
}: EmailToPrimeraMaleApplicationProps) => {
  const previewText = `Welcome ${firstName} ${lastName} has applied to your agency`;
  const currentYear = new Date().getFullYear();
  const birthDate = new Date(dateOfBirth);
  const formattedDateOfBirth = birthDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <React.Fragment>
      <Html  className="bg-white">
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind
                config={{
                  theme: {
                    extend: {
                      colors: {
                        brand: "#007291",
                      },
                    },
                  },
                }}
              >
          <Body className="font-sans">
            <Container className="rounded-md border-[#f3f3f5] my-[40px] mx-auto max-w-[44rem]">
              <div className="h-60 w-full">
                  <Img
                    className="object-cover  rounded-t-md h-full w-full -z-10"
                    alt="Logo"
                    src="https://utfs.io/f/cef924ce-0707-4ff2-9e47-27819b922d87-5pkz02.jpg"
                    width={200}
                    height={200}
                  />
              </div>
                  <Heading className="text-3xl text-center font-bold text-black ">
                    <br/>
                    Male Application {firstName} {lastName}
                  </Heading>

              <Section className="px-2">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                   Application Details
                </Text>
                {/* Personal Information */}
                <Row>
                  <Hr className="w-[96%]" />
                  <Text className="text-base m-0 mb-0.5 pl-4 font-bold ">
                    Personal Information
                  </Text>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        First Name
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {firstName}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Last Name
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {lastName}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Email</p>
                      <Link href={`mailto:${email}`}>
                        <p className="text-black text-sm my-1 font-bold ">
                          {email}
                        </p>
                      </Link>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Phone Number
                      </p>
                      <Link href={`tel:${phoneNumber}`}>
                        <p className="text-black text-sm my-1 font-bold ">
                          {phoneNumber}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Address</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {address}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Date of Birth
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {formattedDateOfBirth}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Your Story
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {yourStory}
                      </p>
                    </div>
                  </div>
                </Row>
                {/* Measurements */}
                <Row>
                  <Hr className="w-[96%]" />
                  <Text className="text-base m-0 mb-0.5 pl-4 font-bold ">
                    Measurements
                  </Text>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Height</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {height}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Weight</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {weight}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Hair Color
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {hairColor}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Eye Color
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {eyeColor}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Hips</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {hips}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Shoe Size
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {shoeSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-0.5 p-[1px] w-full">
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Tattoos</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {tattoos}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Piercings
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {piercings}
                      </p>
                    </div>
                  </div>
                </Row>

                {/* Polaroids */}
                <Row className="px-4">
                  <Hr className="" />
                  <Text className="text-base m-0 mb-0.5 pl-4 font-bold ">
                    Polaroids
                  </Text>
                  <div className="flex mb-0.5 w-full">
                    <div className=" m-0 w-full">
                      <Img
                        className="my-1 object-cover aspect-square hover:aspect-contain"
                        alt="Front Polaroid"
                        src={imageFront}
                        width={200}
                        height={200}
                      />
                      <p className="text-gray-500 text-xs mt-1 mb-0">Front</p>
                    </div>
                    <div className=" m-0 w-full">
                      <Img
                        className="my-1 object-cover aspect-square hover:aspect-contain"
                        alt="Profile Polaroid"
                        src={imageProfile}
                        width={200}
                        height={200}
                      />
                      <p className="text-gray-500 text-xs mt-1 mb-0">Profile</p>
                    </div>
                    <div className=" m-0 w-full">
                      <Img
                        className="my-1 object-cover aspect-square hover:aspect-contain"
                        alt="Degree Polaroid"
                        src={imageDegree}
                        width={200}
                        height={200}
                      />
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        45 Degree
                      </p>
                    </div>
                    <div className=" m-0 w-full">
                      <Img
                        className="my-1 object-cover aspect-square hover:aspect-contain"
                        alt="Top Down Polaroid"
                        src={imageTopDown}
                        width={200}
                        height={200}
                      />
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Top Down
                      </p>
                    </div>
                  </div>

                 <Hr className="" />
                </Row>

              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </React.Fragment>
  );
};

export { EmailToPrimeraMaleApplication };