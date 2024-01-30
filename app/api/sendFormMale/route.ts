// api/sendFormMale/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../env";
import  { EmailMaleResponse } from "@/emails/emailMaleResponse";
import { siteConfig } from "@/config/site";

const resend = new Resend(resendApi);

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



  await resend.emails.send(
    {
    from: "Primera Klase <work@robertquintero.me>",
    // to: email,
    to: [email, "work@robertquintero.me"],
    subject: "Talent Application Male",
    reply_to: "work@robertquintero.me",

    react: EmailMaleResponse ({
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

  );
  return NextResponse.json({ status: "ok" });
}
