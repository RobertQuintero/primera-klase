// api/sendFormFemale/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../env";
import { EmailFemaleResponse } from "@/emails/emailFemaleResponse";
import { EmailToPrimeraFemaleApplication } from "@/emails/emailToPrimeraFemaleApplication";
import { siteConfig } from "@/config/site";

const resend = new Resend("re_EpK8k7Dx_Evv2pamt9ntARVebZtgzy1ak");

export async function POST(request: NextRequest) {
  const {
    //personal info
    firstName,
    lastName,
    dateOfBirth,
    nationality,
    email,
    instagramUrl,
    phoneNumber,
    address,
    yourStory,

    //measurements
    height,
    weight,
    bust,
    waist,
    hips,
    shoeSize,
    dressSize,
    pantsSize,
    hairColor,
    eyeColor,
    tattoos,
    piercings,

    //Polaroids
    // this are the file image that will be uploaded jpeg, png, jpg
    imageFront,
    imageProfile,
    imageDegree,
    imageTopDown,
  } = await request.json();

  await resend.batch.send([
    {
      from: "Primera Klase <work@robertquintero.me>",
      to: [email],
      subject: "Talent Application Female Received",
      reply_to: "work@robertquintero.me",

      react: EmailFemaleResponse({
        // Personal Info
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        instagramUrl,
        email,
        phoneNumber,
        address,
        yourStory,

        //Measurements
        height,
        weight,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        hairColor,
        eyeColor,
        tattoos,
        piercings,

        // Polaroid
        imageFront,
        imageProfile,
        imageDegree,
        imageTopDown,
      }),
      text: "", // Add this line
    },
    {
      from: "Primera Klase <work@robertquintero.me>",
      // to: email,
      to: [
        siteConfig.recruiter.person1,
        siteConfig.recruiter.person2,
        siteConfig.recruiter.person3,
      ],
      subject: "Talent Application Female",
      reply_to: "work@robertquintero.me",

      react: EmailToPrimeraFemaleApplication({
        // Personal Info
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        instagramUrl,
        email,
        phoneNumber,
        address,
        yourStory,

        //Measurements
        height,
        weight,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        hairColor,
        eyeColor,
        tattoos,
        piercings,

        // Polaroid
        imageFront,
        imageProfile,
        imageDegree,
        imageTopDown,
      }),
      text: "", // Add this line
    },
  ]);
  return NextResponse.json({ status: "ok" });
}
