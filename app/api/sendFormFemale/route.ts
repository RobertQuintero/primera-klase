// api/sendFormFemale/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../env";
import { EmailFemaleResponse } from "@/emails/emailFemaleResponse";

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



  await resend.emails.send({
    from: "Primera Klase <work@robertquintero.me>",
    to: [email, "work@robertquintero.me"],
    subject: "Talent Female Submission",
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
    text: "This is a plain text version of the email content.", // Add this line
  });

  console.log("email sent");
  return NextResponse.json({ status: "ok" });
}
