//api/send/env.ts
import { config } from 'dotenv';
config();

export const resendApi = assertValue(
  process.env.NEXT_PUBLIC_RESEND_API_KEY,
  'Missing environment variable: NEXT_PUBLIC_RESEND_API_KEY'
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}