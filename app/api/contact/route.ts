// api/send/route.ts
import { ContactResponse } from "@/emails/contactResponse";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendApi } from "../env";


const resend = new Resend(resendApi);


export async function POST(request: NextRequest) {
  const { name, email, message, subject } = await request.json();

  await resend.emails.send({
    from: "Robert Quintero <work@robertquintero.me>",
    to: [email, "work@robertquintero.me"],
    subject: "Thank you for messaging me on my website!",
    reply_to: "work@robertquintero.me",
    react: ContactResponse({ name, email, message, subject }),
    text: "This is a plain text version of the email content.", // Add this line
  });
  return NextResponse.json({ status: "ok" });
}

//why is this not working?? I'm getting a 504 Gateway Timeout error when I try to send a message
//I'm not sure what I'm doing wrong here. I'm following the docs exactly.
