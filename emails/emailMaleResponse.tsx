//emails/emailMaleResponse.tsx
import * as React from "react";
import {
  Body,
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

type EmailMaleResponseProps = {
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
  tattoos: string;
  piercings: string;

  // Polaroid
  imageFront: string;
  imageProfile: string;
  imageDegree: string;
  imageTopDown: string;
};

const EmailMaleResponse: React.FC<EmailMaleResponseProps> = ({
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
  tattoos,
  piercings,

  // Polaroid
  imageFront,
  imageProfile,
  imageDegree,
  imageTopDown,
}: EmailMaleResponseProps) => {
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
  const previewText = `Thank you, ${firstName}! Your Modeling Application is in Good Hands.`;
  const currentYear = new Date().getFullYear();
  const birthDate = new Date(dateOfBirth);
  const formattedDateOfBirth = birthDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <React.Fragment>
      <Html className="bg-white">
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="font-sans">
            <Container className="rounded-md border-[#f3f3f5] my-[40px] mx-auto max-w-[44rem]">
              <div className="h-60 w-full">
                <Img
                  className="object-cover  rounded-t-md h-full w-full -z-10"
                  alt="Logo"
                  // src="https://utfs.io/f/cef924ce-0707-4ff2-9e47-27819b922d87-5pkz02.jpg"
                  src={`${baseUrl}/bg/primera.jpg`}
                  width={200}
                  height={200}
                />
              </div>

              <Heading className="text-3xl text-center font-bold text-black ">
                <br />
                Thank You, {firstName}!
              </Heading>
              <Text className="text-2xl font-bold text-center ">
                Your Modeling Application is in Good Hands.
              </Text>

              <Section className="px-6">
                <Text className="text-base">
                  Dear <strong>{firstName}</strong>,
                </Text>
                <Text>
                  Thank you for taking the time to submit your detailed
                  application to <strong>{siteConfig.name}</strong>. We
                  appreciate your interest in becoming a part of our agency.
                </Text>
                <Text>
                  We have received your application and carefully reviewed the
                  information you provided. We are pleased to see your
                  enthusiasm and commitment to pursuing a career in modeling.
                  Your comprehensive details have given us valuable insights
                  into your background, experience, and aspirations.
                </Text>
                <Text>
                  Our team will now carefully assess your application, and we
                  aim to provide you with a response within the next{" "}
                  <strong>14 days</strong>. Please be patient during this
                  process, as we strive to give each application the attention
                  it deserves.
                </Text>
                <Text>
                  In the meantime, if there are any additional materials or
                  updates you&apos;d like to share, feel free to respond to this
                  email or provide them through our online portal.
                </Text>

                <Text>
                  Thank you once again for considering {siteConfig.name}. We are
                  excited about the possibility of working with you and will be
                  in touch soon.
                </Text>
              </Section>

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
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Nationality
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {nationality}
                      </p>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Birth of Date
                      </p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {formattedDateOfBirth}
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
                      <p className="text-gray-500 text-xs mt-1 mb-0">
                        Instagram
                      </p>
                      <Link href={instagramUrl}>
                        <p className="text-black text-sm my-1 font-bold ">
                          {instagramUrl}
                        </p>
                      </Link>
                    </div>
                    <div className=" m-0 pl-4 w-full">
                      <p className="text-gray-500 text-xs mt-1 mb-0">Address</p>
                      <p className="text-black text-sm my-1 font-bold ">
                        {address}
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
                <Row >
                  <Hr className="" />
                  <Text className="text-base m-0 mb-0.5 pl-4 font-bold ">
                    Polaroids
                  </Text>
                  <div className="flex mb-0.5 w-full px-4 pb-8">
                    {imageFront ? (
                      <figure className=" m-0 w-full">
                        <Img
                          className="my-1 object-cover aspect-square hover:aspect-contain"
                          alt="Front Polaroid"
                          src={imageFront}
                          width={200}
                          height={200}
                        />
                        <figcaption className="text-gray-500 text-xs mt-1 mb-0">
                          Front
                        </figcaption>
                      </figure>
                    ) : null}
                    {imageProfile ? (
                      <figure className=" m-0 w-full">
                        <Img
                          className="my-1 object-cover aspect-square hover:aspect-contain"
                          alt="Profile Polaroid"
                          src={imageProfile}
                          width={200}
                          height={200}
                        />
                        <figcaption className="text-gray-500 text-xs mt-1 mb-0">
                          Profile
                        </figcaption>
                      </figure>
                    ) : null}
                    {imageDegree ? (
                      <figure className=" m-0 w-full">
                        <Img
                          className="my-1 object-cover aspect-square hover:aspect-contain"
                          alt="Degree Polaroid"
                          src={imageDegree}
                          width={200}
                          height={200}
                        />
                        <figcaption className="text-gray-500 text-xs mt-1 mb-0">
                          45 Degree
                        </figcaption>
                      </figure>
                    ) : null}
                    {imageTopDown ? (
                      <figure className=" m-0 w-full">
                        <Img
                          className="my-1 object-cover aspect-square hover:aspect-contain"
                          alt="Top Down Polaroid"
                          src={imageTopDown}
                          width={200}
                          height={200}
                        />
                        <figcaption className="text-gray-500 text-xs mt-1 mb-0">
                          Top Down
                        </figcaption>
                      </figure>
                    ) : null}
                  </div>

                  <Hr className="" />
                </Row>
              </Section>

              {/* Site  */}
              <Section className="px-2 mt-8">
                <Text className="text-center mt-4 text-gray-500">
                  If you didn&apos;t request this email, there&apos;s nothing to worry
                  about, you can safely ignore it.
                </Text>
                <Text className="text-center mt-4 text-gray-500">
                  If you have any questions, please contact us at{" "}
                  <Link href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </Link>
                </Text>

                <Link href={siteConfig.url} className="m-auto" target="_blank">
                  <Img
                    src={`${baseUrl}/bg/primeraWhite.png`}
                    width="170"
                    height="70"
                    alt="Primera"
                    className="m-auto"
                  />
                </Link>
                <br />
                <Row align="center" className="w-72">
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Work
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/talents`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Talents
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/about`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      About
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/contact`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Contact
                    </Link>
                  </Column>
                </Row>
              </Section>

              {/* Stay Connected */}
              <Section className="mt-6">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                  Stay Connected
                </Text>
                <Text className="text-center text-gray-500">
                  Follow us our social media to stay up to date with our latest
                  news
                </Text>
                <div className="flex justify-center items-center mx-auto gap-6 mt-4">
                  <Link href={siteConfig.links.instagram}>
                    <Img
                      src={`${baseUrl}/icon/instagram-30.png`}
                      width="32"
                      height="32"
                      alt="instagram"
                    />
                  </Link>
                  <Link href={siteConfig.links.facebook}>
                    <Img
                      src={`${baseUrl}/icon/facebook-30.png`}
                      width="32"
                      height="32"
                      alt="facebook"
                    />
                  </Link>
                  <Link href={siteConfig.links.twitter}>
                    <Img
                      src={`${baseUrl}/icon/twitter-30.png`}
                      width="32"
                      height="32"
                      alt="twitter"
                    />
                  </Link>
                  <Link href={siteConfig.links.linkedin}>
                    <Img
                      src={`${baseUrl}/icon/linkedin-30.png`}
                      width="32"
                      height="32"
                      alt="linkedin"
                    />
                  </Link>
                </div>
              </Section>

              {/* Footer */}
              <Section className="px-2">
                <Text className="text-center text-gray-500 mt-8">
                  © {currentYear} {siteConfig.name}. All rights reserved.
                </Text>
                <Text className="text-center text-gray-500">
                  {siteConfig.address}
                </Text>
                <Text className="text-center text-gray-500 mt-2">
                    Created by <Link href={siteConfig.createdByUrl}>{siteConfig.createByName}</Link>
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </React.Fragment>
  );
};

export { EmailMaleResponse };
