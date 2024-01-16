// api/send/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../contact/env";
import { EmailFemaleResponse } from "@/emails/emailFemaleResponse";

const resend = new Resend(resendApi);

export async function POST(request: Request) {
  const {
    //personal info
    firstName,
    lastName,
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
    frontView,
    profileView,
    degreeView,
    topDownView,
  } = await request.json();

  await resend.emails.send({
    from: "Robert Quintero <work@robertquintero.me>",
    to: [email, "work@robertquintero.me"],
    subject: "Talent Female Submission",
    reply_to: "work@robertquintero.me",
    react: EmailFemaleResponse({
      //personal info
      firstName,
      lastName,
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
      frontView,
      profileView,
      degreeView,
      topDownView,
    }),
    text: "This is a plain text version of the email content.", // Add this line
  });

  return NextResponse.json({ status: "ok" });
}

//why is this not working?? I'm getting a 504 Gateway Timeout error when I try to send a message
//I'm not sure what I'm doing wrong here. I'm following the docs exactly.
