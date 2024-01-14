// api/send/route.ts
import { MessageResponse } from '@/emails/messageResponse';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { resendApi } from './env';



const resend = new Resend(resendApi);

export async function POST(request: Request) {

    const {name, email, message, subject} = await request.json();

    await resend.emails.send({
      from: 'Robert Quintero <work@robertquintero.me>',
      to: [email, 'work@robertquintero.me' ],
      subject: 'Thank you for messaging me on my website!',
      reply_to: 'work@robertquintero.me',
      react: MessageResponse({ name, email, message, subject }),
    });

  return NextResponse.json({ status: 'ok', });
  }

//why is this not working?? I'm getting a 504 Gateway Timeout error when I try to send a message
//I'm not sure what I'm doing wrong here. I'm following the docs exactly.

