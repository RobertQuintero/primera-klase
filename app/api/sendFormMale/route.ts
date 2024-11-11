// api/sendFormMale/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../env";
import { EmailMaleResponse } from "@/emails/emailMaleResponse";
import { siteConfig } from "@/config/site";
import { EmailToPrimeraMaleApplication } from "@/emails/emailToPrimeraMaleApplication";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

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
    hips,
    shoeSize,
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
      // to: email,
      to: [email],
      subject: "Talent Application Male Received",
      reply_to: "work@robertquintero.me",

      react: EmailMaleResponse({
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
        hairColor,
        eyeColor,
        hips,
        shoeSize,
        tattoos,
        piercings,

        //Polaroids
        imageProfile,
        imageFront,
        imageDegree,
        imageTopDown,
      }),
      text: "",
    },
    {
      from: "Primera Klase <work@robertquintero.me>",
      // to: email,
      to: [
        siteConfig.recruiter.person1,
        siteConfig.recruiter.person2,
        siteConfig.recruiter.person3,
      ],
      subject: "Talent Application Male",
      reply_to: "work@robertquintero.me",

      react: EmailToPrimeraMaleApplication({
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
        hairColor,
        eyeColor,
        hips,
        shoeSize,
        tattoos,
        piercings,

        //Polaroids
        imageProfile,
        imageFront,
        imageDegree,
        imageTopDown,
      }),
      text: "",
    },
  ]);
  return NextResponse.json({ status: "ok" });
}
