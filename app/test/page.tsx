"use client";

import { AnimatedLogo } from "@/components/animation/animatedLogo";
import { paragraph, title } from "@/components/primitives";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { AddressSocialMediaLinks } from "../contact/components/addressSocialMediaLinks";
import { getContacts } from "@/sanity/utils/sanity-contact";
import { AnimatedLoading } from "@/components/animation/animatedLoading";
import { AnimatedFirstPageLoad } from "@/components/animation/animatedFirstPageLoading";



export default async function Test() {

  const contacts = await getContacts();

  return (
    <React.Fragment>
                <AnimatedLoading />
    </React.Fragment>
  );
}
