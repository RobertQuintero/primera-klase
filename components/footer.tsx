"use client";
import { Button, Divider, Input, Link } from "@nextui-org/react";
import React from "react";
import { siteConfig } from "@/config/site";

import NextLink from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { paragraph, title } from "./primitives";
import { AnimatedButtonNavLink } from "./animation/animatedButtonLink";
import { FacebookIcon, LinkedInIcon, Logo, TwitterIcon } from "./icons";
export const Footer = () => {
  return (
    <React.Fragment>
      <Divider />
      <footer className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-8 w-full my-8 sm:my-12 gap-8">

          <div className="flex flex-col justify-center items-center gap-4  col-span-8  md:col-span-4 w-full  order-1 md:order-2">
            <h3
              className={` ${title({
                size: "xl",
              })}`}
            >
              Get in Touch
            </h3>
            <p
              className={`!text-default-500 !font-normal !text-center ${paragraph(
                {
                  size: "md",
                }
              )}`}
            ></p>
            <p
              className={`!font-normal !text-default-500 !text-center ${title({
                size: "sm",
              })}`}
            >
              Created by{" "}
              <Link as={NextLink} href="/about">
                Robert Quintero
              </Link>
            </p>
            <Button
              variant="bordered"
              size="md"
              radius="full"
              as={NextLink}
              href={siteConfig.navItems[4].href}
            >
              Say Hello🤚
            </Button>
          </div>

          <div className="flex flex-row justify-center gap-4 col-span-8 md:col-span-2 w-full order-3  md:order-1">
            <div className="flex flex-col gap-2 ">
              <AnimatedButtonNavLink link="/" titleLink="Work" />
              <AnimatedButtonNavLink link="/women" titleLink="Women" />
              <AnimatedButtonNavLink link="/men" titleLink="Men" />
              <AnimatedButtonNavLink link="/talents" titleLink="Talents" />
              <AnimatedButtonNavLink
                link="/instructors"
                titleLink="Instructors"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <AnimatedButtonNavLink link="/about" titleLink="About" />
              <AnimatedButtonNavLink link="/events" titleLink="Events" />
              <AnimatedButtonNavLink
                link="/testimonials"
                titleLink="Testimonials"
              />
              <AnimatedButtonNavLink link="/gallery" titleLink="Gallery" />
              <AnimatedButtonNavLink link="/contact" titleLink="contacts" />
            </div>
          </div>

          <div className="flex flex-row  gap-4 col-span-8 md:col-span-2 w-full order-2 md:order-3">

          <div className="flex flex-col gap-4 sm:gap-8 w-full mx-auto max-w-lg">
              <div className="flex flex-row w-full items-baseline">
              <Input
                radius="none"
                type="email"
                label="Subscribe to our newsletter"
                variant="underlined"
                color="warning"
                className=""
              />
              <Button
                radius="none"
                variant="flat"
                className=""
                color="warning"
              >

                Subscribe
              </Button>
              </div>
              <div className="flex flex-row gap-2 w-full">
                  <Link
                    isExternal
                    href={siteConfig.links.facebook}
                    aria-label="facebook"
                  >
                    <FacebookIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    href={siteConfig.links.twitter}
                    aria-label="twitter"
                  >
                    <TwitterIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    href={siteConfig.links.linkedin}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="text-default-500 w-7" />
                  </Link>
              </div>
          </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
