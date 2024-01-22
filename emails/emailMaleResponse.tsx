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
  Tailwind,} from "@react-email/components";
import { E } from "uploadthing/dist/types-caf29eb6";

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
  pantsSize: string;
  tattoos: string;
  piercings: string;

  // Polaroid
  imageFront: string;
  imageProfile: string;
  imageDegree: string;
  imageTopDown: string;
};
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
export const EmailMaleResponse = ({
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

}: EmailMaleResponseProps) => {
  const previewText = `Welcome ${firstName} ${lastName} has applied to your agency`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/primera-klase-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>

            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong></strong> on <strong>Vercel</strong>
            </Heading>
            <Text >
              Hello ,
            </Text>
            <Section>
              <Row>
                <Column>
                  <Link href={imageFront} target="_blank" download={imageFront}>
                      <Img
                        src={imageFront}
                        width={100}
                        height={100}
                        alt="Front Image"
                      />
                  </Link>
                </Column>
                <Column>
                  <Link href={imageProfile} target="_blank" download={imageProfile}>
                      <Img
                        src={imageProfile}
                        width={100}
                        height={100}
                        alt="Profile Image"
                      />
                  </Link>
                </Column>
                <Column >
                  <Link href={imageDegree} target="_blank" download={imageDegree}>
                      <Img
                        src={imageDegree}
                        width={100}
                        height={100}
                        alt="Degree Image"
                      />
                  </Link>
                </Column>
                <Column >
                  <Link href={imageTopDown} target="_blank" download={imageTopDown}>
                      <Img
                        src={imageTopDown}
                        width={100}
                        height={100}
                        alt="Top Down Image"
                      />
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">

            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};



export default EmailMaleResponse;
